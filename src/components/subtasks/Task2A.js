import React from 'react';
import Canvas from '../Canvas';


class Task2A extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      showCanvas: false,
      action: 'SHOW_ROW',
      updateCanvas: false,
      exportData: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.showCanvas = this.showCanvas.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate(str){
    var array = str.split(/,| /).map((item)=> item.split(''));
    if (array.length>0){
      for (var i = 1; i<array.length; i++){
        if (array[i][0]-array[i-1][0]>1){
          this.setState({
            differenceError: true
          });
        }else{
          this.setState({
            differenceError: false
          });
        }
      }
    }
  }

  handleInput(event){
    this.validate(event.target.value);
    this.setState({
      updateCanvas: false,
      inputValue: event.target.value
    });
  }

  showCanvas(){
    if (!this.state.showCanvas){
      this.setState({
        showCanvas: true,
        updateCanvas: false,
        exportData: this.state.inputValue,
        action: 'SHOW_ROW'
      });
    }else{
      this.setState({
        updateCanvas: true,
        action: 'RERENDER_ROW',
        exportData: this.state.inputValue
      });
    }
  }


  render() {
    var canvas;
    if (this.state.showCanvas){
      canvas = <Canvas action={this.state.action} updateCanvas={this.state.updateCanvas} width='600' height='150' query={this.state.exportData} />
    }else{
      canvas = '';
    }

    var error = '';
    if (this.state.differenceError){
        error = <p className='error'><strong>Error!</strong> Subtraction difference is more than 1!</p>
    } else {
      error = '';
    }

  return(
    <div className="task1a">
    <h3>Task2 A-B</h3>
    <h4>In this tasks I created row generation visualisation and added animation of transisting from one state to other</h4>
      <input type='text' value={this.state.inputValue} onChange={this.handleInput} placeholder="3G 4G 5B"/>
      <button onClick={this.showCanvas}>Show row</button>
       <br />
       {error}
       <br />
       {canvas}
    </div>

    );
  }
}



export default Task2A;
