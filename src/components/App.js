import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="wrapper">
        <div className="calculator-container">
          <Display value={next || total || '0'} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
        <div hidden>{operation}</div>
      </div>
    );
  }
}

export default App;
