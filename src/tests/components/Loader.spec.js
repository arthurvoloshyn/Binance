import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../components/Loader';

describe('Loader component', () => {
  const loader = shallow(<Loader />);

  it('renders properly', () => {
    expect(loader.html()).toMatchSnapshot();
  });

  it('renders 4 dots', () => {
    expect(loader.find('.dot')).toHaveLength(4);
  });

  it('renders loader', () => {
    expect(loader.find('.lds-ellipsis')).toHaveLength(1);
  });
});
