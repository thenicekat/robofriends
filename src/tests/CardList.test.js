import { shallow } from 'enzyme';
import React from 'react';
import CardList from '../components/CardList';
import {createSerializer} from 'enzyme-to-json';
import toJson from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: "John snow",
            username: "John don",
            email: "john@gmail.com"
        }
    ]
	expect(toJson(shallow(<CardList robots={mockRobots}/>))).toMatchSnapshot();
})