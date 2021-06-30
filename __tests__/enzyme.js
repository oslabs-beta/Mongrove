import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';


import TestDBGenArea from '../client/pages/TestDBGenArea.jsx';

configure({ adapter: new Adapter() });

describe('React Unit Tests', () => {
  describe('Database Creation Area Rendering', () => {
    let wrapper;
    const mockFunc = jest.fn();
    const props = {
      schemaList: [
        {name: "propName1", value: "propValue1"}, 
        {name: "propName2", value: "propValue2"},
        {name: "propName3", value: "propValue3"}
      ]
    }

    beforeAll(() => {
      wrapper = shallow(
        <TestDBGenArea 
          {...props}
          handleGenerateTestDatabase={mockFunc}
        />
      )
    })

    it('Has a div with the id testdbGenArea', () => {
      expect(wrapper.find('#testdbGenArea')).toHaveLength(1);
    })

    it('Has an H2 with the text "Test Database Configuration"', () => {
      expect(wrapper.contains(<h2>Test Database Configuration</h2>)).toBe(true);
    })

    it('Button should perform functionality onClick', () => {
      wrapper.find('button').simulate('click');
      expect(mockFunc).toHaveBeenCalled();
    })

    it('Dropdown list should have the same number of options as schemaList elements + default option', () => {
      expect(wrapper.find("#selectSchema").children()).toHaveLength(4);
    })
  })
})
