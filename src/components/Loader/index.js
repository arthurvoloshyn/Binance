import React from 'react';
import { LISTS } from '../../constants';

const { DOTS_LIST } = LISTS;

const Loader = () => (
  <div className="text-center w-100">
    <div className="lds-ellipsis">
      {DOTS_LIST.map(({ id }) => (
        <div key={`dot-${id}`} className="dot" />
      ))}
    </div>
  </div>
);

export default Loader;
