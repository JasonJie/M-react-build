import React, { Component } from 'react';

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        当前count值：
        {count}
        <br />
        <button
          style={{ border: '1px dashed blue' }}
          onClick={() => this.handleClick()}
          type="button">
          增加1
        </button>
      </div>
    );
  }
}
