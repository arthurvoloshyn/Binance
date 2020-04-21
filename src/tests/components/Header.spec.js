import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header component', () => {
  const header = shallow(<Header />);

  it('renders properly', () => {
    expect(header.debug()).toMatchSnapshot();
  });

  it('renders header', () => {
    expect(header.find('header')).toHaveLength(1);
  });

  it('renders navbar text', () => {
    expect(header.find('.navbar-text .small').text()).toEqual(
      'Trade history viewer web app',
    );
  });
});
