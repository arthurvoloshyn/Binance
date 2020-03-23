import React from 'react';

const Loader = () => (
  <div className="text-center w-100">
    <div className="lds-ellipsis">
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </div>
  </div>
);

export default Loader;
