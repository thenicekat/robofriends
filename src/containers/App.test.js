import { shallow } from 'enzyme';
import App from './App';

it("expect to render the app component", () => {
    const mockStore = {
        robots: [],
        searchfield: '',

    };
    expect(shallow(<App store={mockStore}/>).length).toMatchSnapshot();
});