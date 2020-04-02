import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.Reset}
          className="btn btn-outline-primary btn-lg "
        >
          RESET
        </button>
        <br></br>
        <br></br>
        {this.props.counter.map(counters => (
          <Counters
            key={counters.id}
            delete={this.props.Delete}
            Increment={this.props.Increment}
            Decrement={this.props.Decrement}
            counter={counters}
          />
        ))}
        ;
      </div>
    );
  }
}

export default Counter;
