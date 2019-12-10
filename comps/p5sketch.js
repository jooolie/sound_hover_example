import P5Wrapper from 'react-p5-wrapper';

export default function sketch(p){
    let canvas;

    p.setup = () => {
      canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      p.noStroke();
    }

    p.draw = () => {
      // p.background('black');
    }

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      if(canvas) //Make sure the canvas has been created
        p.fill(newProps.color);
    }
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
 
