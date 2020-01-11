import React, { Component } from 'react';
import T from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import style from './Reader.module.css';
import publications from '../publications';

export default class Reader extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    step: T.number,
    initialValue: T.number,
  };

  state = {
    value: 1,
    textNum: 0,
    disabled: false,
  };

  handleIncrement = e => {
    this.setState(prevState => ({
      value: prevState.value + this.props.step,
      textNum: prevState.textNum + this.props.step,
    }));
  };

  handleDecrement = e => {
    this.setState(prevState => ({
      value: prevState.value - this.props.step,
      textNum: prevState.textNum - this.props.step,
    }));
  };

  render() {
    const { value, textNum } = this.state;

    return (
      <div className={style.reader}>
        <h1 className={style.text}>Reader</h1>
        <Controls
          start={value}
          end={publications.length - 1}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <Counter value={value} initialValue={publications} />
        <Publication publications={publications} textNum={textNum} />
      </div>
    );
  }
}
