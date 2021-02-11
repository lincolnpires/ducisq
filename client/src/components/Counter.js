import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    const { currentCount } = this.state;
    this.setState({
      currentCount: currentCount + 1,
    });
  }

  render() {
    const { currentCount } = this.state;
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">
          Current count:
          <strong>{currentCount}</strong>
        </p>

        <button type="button" className="btn btn-primary" onClick={this.incrementCounter}>
          Increment
        </button>
      </div>
    );
  }
}
export default Counter;
