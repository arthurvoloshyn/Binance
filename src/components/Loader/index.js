import React from 'react';
import { DOTS_LIST } from '../../constants';

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
