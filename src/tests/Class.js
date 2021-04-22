import React from "react";
import TestComponentFunc from "./TestComponentFunc";
import TestComponentClass from "./TestComponentClass";

export default class Class extends React.Component {
  benchmark = (n) => {
    let start = Date.now();
    for (let i = 0; i < n; i++) {
      <TestComponentFunc />;
    }
    console.log((Date.now() - start) / n);
  };

  test = () => {
    let start = Date.now();
    let end = start + 60 * 1000;
    let numberOfExecutions = 0;
    while (Date.now() < end) {
      <TestComponentFunc />;
      numberOfExecutions++;
    }
    console.log(numberOfExecutions / (60 * 100));
  };

  render() {
    return <div>{(() => this.benchmark(100000))()}</div>;
  }
}
