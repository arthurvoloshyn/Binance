import React from 'react';
import { shallow } from 'enzyme';
import NavItem from '../../components/NavItem';

describe('NavItem component', () => {
  describe('NavItem component active prop', () => {
    describe('NavItem component with positive active', () => {
      const props = {
        active: true,
      };

      const navItem = shallow(<NavItem {...props} />);

      it('renders properly', () => {
        expect(navItem).toMatchSnapshot();
      });

      it('renders active', () => {
        expect(navItem.find('button').prop('className')).toEqual(
          'nav-link active',
        );
      });
    });

    describe('NavItem component with negative active', () => {
      const props = {
        active: false,
      };

      const navItem = shallow(<NavItem {...props} />);

      it('renders properly', () => {
        expect(navItem).toMatchSnapshot();
      });

      it('renders nav-link', () => {
        expect(navItem.find('button').prop('className')).toEqual('nav-link');
      });
    });
  });
  //
  describe('NavItem component onClick prop', () => {
    const mockOnClick = jest.fn();

    const props = {
      onClick: mockOnClick,
    };

    const navItem = shallow(<NavItem {...props} />);

    it('renders properly', () => {
      expect(navItem).toMatchSnapshot();
    });

    describe('when clicking the button', () => {
      beforeEach(() => {
        navItem.find('button').simulate('click');
      });

      it('dispatches the `onClick()` method it receives from props', () => {
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('NavItem component with pair', () => {
    const props = {
      pair: 'BTC',
    };

    const navItem = shallow(<NavItem {...props} />);

    it('renders properly', () => {
      expect(navItem).toMatchSnapshot();
    });

    it('renders pair', () => {
      expect(navItem.find('button').prop('data-tab')).toEqual(props.pair);
    });

    it('renders pair text', () => {
      expect(navItem.find('button').text()).toEqual(`${props.pair} Markets`);
    });
  });

  describe('NavItem component with className', () => {
    const props = {
      className: 'btn',
    };

    const navItem = shallow(<NavItem {...props} />);

    it('renders properly', () => {
      expect(navItem).toMatchSnapshot();
    });

    it('renders className', () => {
      expect(navItem.find('button').prop('className')).toEqual(
        `nav-link ${props.className}`,
      );
    });
  });

  describe('NavItem component with default props', () => {
    const mockOnClick = jest.fn();
    const props = {};

    const navItem = shallow(<NavItem {...props} />);

    it('renders properly', () => {
      expect(navItem).toMatchSnapshot();
    });

    describe('NavItem component pair prop', () => {
      it('renders default navigation item pair', () => {
        expect(navItem.find('button').prop('data-tab')).toEqual('BTC');
      });

      it('renders default navigation item pair text', () => {
        expect(navItem.find('button').text()).toEqual('BTC Markets');
      });
    });

    it('renders default button className', () => {
      expect(navItem.find('button').prop('className')).toEqual('nav-link');
    });

    describe('NavItem component onClick prop', () => {
      beforeEach(() => {
        navItem.find('button').simulate('click');
      });

      it('dispatches the `onClick()` method it receives from props', () => {
        expect(mockOnClick).toHaveBeenCalledTimes(0);
      });
    });
  });
});
