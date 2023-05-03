import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import Scroll from '../components/Scroll'

import { requestRobots, setSearchField } from '../store/actions';

import "./App.css";

function App() {
	const dispatch = useDispatch();

	const robots = useSelector(state => state.requestRobots.robots);
	const searchField = useSelector(state => state.searchRobots.searchField);

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})

	useEffect(() => {
		dispatch(requestRobots());
	})
	

	if(robots.length === 0){
		return <h1>Loading..</h1>
	}

	return(
		<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<SearchBox searchChange={(event) => dispatch(setSearchField(event.target.value))}/>
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	)
}


export default (App);