import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './p5sketch';
import App from './sound';

class App2 extends Component {
  constructor(){
    super();
    this.state = {color:[Math.random()*255, Math.random()*255, Math.random()*255]};
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor(){
    this.setState({color:[Math.random()*255, Math.random()*255, Math.random()*255]}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.randomColor}>Random Color</button>
        <P5Wrapper sketch={sketch} color={this.state.color}> <App /> </P5Wrapper>
      </div>
    );
  }
}

export default App2;
