import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app.debug()).toMatchSnapshot();
  });

  it('renders <Header />', () => {
    expect(app.find('Header')).toHaveLength(1);
  });

  it('render only one <main />', () => {
    expect(app.find('main')).toHaveLength(1);
  });
});
