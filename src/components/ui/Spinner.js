import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img src={spinner} alt="Loading" className="spinnerImg" />
    </div>
  );
};

export default Spinner;
