import React from 'react';

class Counter extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  addOne = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  minusOne = () => {
    this.setState({
      count: this.state.count - 1
    });
  }


  render() {
    return (
      <div className="App">
        <div>count: { this.state.count }</div>
        <button onClick={this.addOne}>Add One</button>
        <button onClick={this.minusOne}>Minus One</button>
      </div>
    );
  }
}

export default Counter;
