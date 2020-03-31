import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../../components/Loader';

describe('Loader component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Loader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
