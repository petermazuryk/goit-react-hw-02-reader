import React from 'react';
import style from './Counter.module.css';

const Counter = ({ value, initialValue }) => {
  return (
    <div className={style.counter}>
      <p>
        {value}/{initialValue.length}
      </p>
    </div>
  );
};

export default Counter;
