import React from 'react';
import test from 'ava';
import Enzyme, {shallow, mount} from 'enzyme';
import App from '../src/App.js';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

test('is a success with a mount and a child expectation', t => {
    var actual = mount(<App />);
    t.is(actual.find('h2').length, 1);
});