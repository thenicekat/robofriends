import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

import Scroll from '../components/Scroll'

import "./App.css";

function App() {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		robots: [],
	// 		searchfield: ''
	// 	}
	// } //not needed when we use hooks

	const [robots, setRobots] = useState([]); //robots is the variable and the other term is a function
	const [searchfield, setSearchfield] = useState('');
	const [count, setCount] = useState(0);

	// componentDidMount() {
	// 	//console.log("Check");
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(users => this.setState({ robots: users}));
	// }
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
	 	.then(response => response.json())
	 	.then(users => setRobots(users));

		console.log(count);
	}, [ count ]) //without the array it keeps updating in an infinite loop

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
		// console.log(event.target.value);
		// console.log(filteredRobots);
	}

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	if(robots.length === 0){
		return <h1>Loading..</h1>
	}

	return(
		<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<button onClick={() => setCount(count+1)}>Click Me!</button>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	)
}


export default App;