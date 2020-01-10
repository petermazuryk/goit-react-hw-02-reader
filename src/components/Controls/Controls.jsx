import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement, start, end }) => (
  <section className={style.controls}>
    <button
      className={style.button}
      disabled={start === 1}
      type="button"
      onClick={onDecrement}
    >
      Назад
    </button>
    <button
      className={style.button}
      disabled={start === end}
      type="button"
      onClick={onIncrement}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
