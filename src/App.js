import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Counter from "./Components/counter";

class App extends Component {
  state = {
    counter: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 }
    ]
  };

  HandleReset = () => {
    const counter = this.state.counter.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  HandleDelete = counterId => {
    const counter = this.state.counter.filter(c => c.id !== counterId);
    this.setState({ counter });
  };

  HandleDecrement = count => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(count);
    counter[index] = { ...count };
    counter[index].value--;
    this.setState({ counter });
  };

  HandleIncrement = count => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(count);
    counter[index] = { ...count };
    counter[index].value++;
    this.setState({ counter });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counter.length} />
        <main className="container">
          <Counter
            counter={this.state.counter}
            Increment={this.HandleIncrement}
            Decrement={this.HandleDecrement}
            Delete={this.HandleDelete}
            Reset={this.HandleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
