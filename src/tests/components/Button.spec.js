import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('Button component', () => {
  describe('Button component value prop', () => {
    describe('Button component with positive value', () => {
      const props = {
        value: true,
      };

      const button = shallow(<Button {...props} />);

      it('renders properly', () => {
        expect(button).toMatchSnapshot();
      });

      it('renders Disconnect', () => {
        expect(button.find('button').text()).toEqual('Disconnect');
      });
    });

    describe('Button component with negative value', () => {
      const props = {
        value: false,
      };

      const button = shallow(<Button {...props} />);

      it('renders properly', () => {
        expect(button).toMatchSnapshot();
      });

      it('renders Connect', () => {
        expect(button.find('button').text()).toEqual('Connect');
      });
    });
  });

  describe('Button component onClick prop', () => {
    const mockOnClick = jest.fn();

    const props = {
      onClick: mockOnClick,
    };

    const button = shallow(<Button {...props} />);

    it('renders properly', () => {
      expect(button).toMatchSnapshot();
    });

    describe('when clicking the button', () => {
      beforeEach(() => {
        button.find('button').simulate('click');
      });

      it('dispatches the `onClick()` method it receives from props', () => {
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Button component with id', () => {
    const props = {
      id: 'Connect',
    };

    const button = shallow(<Button {...props} />);

    it('renders properly', () => {
      expect(button).toMatchSnapshot();
    });

    it('renders id', () => {
      expect(button.find('button').prop('data-testid')).toEqual(props.id);
    });
  });

  describe('Button component with className', () => {
    const props = {
      className: 'btn-warning',
    };

    const button = shallow(<Button {...props} />);

    it('renders properly', () => {
      expect(button).toMatchSnapshot();
    });

    it('renders className', () => {
      expect(button.find('button').prop('className')).toEqual(
        `btn ${props.className}`,
      );
    });
  });

  describe('Button component with default props', () => {
    const mockOnClick = jest.fn();
    const props = {};

    const button = shallow(<Button {...props} />);

    it('renders properly', () => {
      expect(button).toMatchSnapshot();
    });

    it('renders default button value', () => {
      expect(button.find('button').text()).toEqual('Disconnect');
    });

    it('renders default button id', () => {
      expect(button.find('button').prop('data-testid')).toEqual('');
    });

    it('renders default button className', () => {
      expect(button.find('button').prop('className')).toEqual('btn');
    });

    describe('Button component onClick prop', () => {
      beforeEach(() => {
        button.find('button').simulate('click');
      });

      it('dispatches the `onClick()` method it receives from props', () => {
        expect(mockOnClick).toHaveBeenCalledTimes(0);
      });
    });
  });
});
