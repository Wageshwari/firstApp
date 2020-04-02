import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counters extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.props.counter.value}
        </span>
        <button
          className="btn btn-success btn-lg"
          onClick={() => this.props.Increment(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-warning btn-lg m-2"
          onClick={() => this.props.Decrement(this.props.counter)}
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-lg m-2"
          onClick={() => this.props.delete(this.props.counter.id)}
        >
          x
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    return this.props.counter.value === 0
      ? "badge badge-secondary  m-2"
      : " badge badge-info m-2";
  }
}

export default Counters;
