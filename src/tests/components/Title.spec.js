import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../components/Title';

describe('Title component', () => {
  describe('Title component with title', () => {
    const props = {
      title: "The World's Leading Cryptocurrency Exchange",
    };

    const title = shallow(<Title {...props} />);

    it('renders properly', () => {
      expect(title).toMatchSnapshot();
    });

    it('renders <h2>', () => {
      expect(title.find('h2')).toHaveLength(1);
    });

    it('renders title text', () => {
      expect(title.find('h2').text()).toEqual(
        "The World's Leading Cryptocurrency Exchange",
      );
    });
  });

  describe('Title component with default props', () => {
    const props = {};

    const title = shallow(<Title {...props} />);

    it('renders properly', () => {
      expect(title).toMatchSnapshot();
    });

    it('renders title text', () => {
      expect(title.find('h2').text()).toEqual('Simple title');
    });
  });
});
