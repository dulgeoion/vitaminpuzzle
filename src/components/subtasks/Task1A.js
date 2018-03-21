import React from 'react';
import Canvas from '../Canvas';


class Task1A extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showCanvas: false
    }
    this.showCanvas = this.showCanvas.bind(this);
  }

  showCanvas(){
    this.setState({
      showCanvas: !this.state.showCanvas
    });
  }


  render() {
    if (this.state.showCanvas){
      return(
        <div className = "task1a">
          <h3>Task1 A</h3>
          <h4>Point of this task was to show how those figures will change color step-by-step. This is static example.</h4>
          <button onClick={this.showCanvas} >Show swaps steps </button> <br />
            <Canvas action="DRAW_STATIC" width='500' height='1200' />
        </div>
      );
    }
  return(
    <div className="task1a">
      <h3>Task1 A</h3>
      <h4>Point of this task was to show how those figures will change color step-by-step. This is static example.</h4>
      <button onClick={this.showCanvas} >Show swaps steps </button> <br />
    </div>

    );
  }
}



export default Task1A;
