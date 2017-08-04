import * as React from 'react';
import {shallow} from 'enzyme';
import {DateTimeButton} from './DateTimeButton';

describe('DateTimeButton', () => {
  it('should render', () => {
    const wrapper = shallow(<DateTimeButton />);
    expect(wrapper).toBeTruthy();
  });
});