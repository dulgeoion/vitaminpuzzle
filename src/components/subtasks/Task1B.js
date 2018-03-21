import React from 'react';
import Canvas from '../Canvas';
import hanoi from './Hanoi';


class Task1B extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      differenceError: false
    }

    this.handleInput = this.handleInput.bind(this);
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
        inputValue: event.target.value
      });

  }

  render() {
    var error = '';
    if (this.state.differenceError){
        error = <p className='error'><strong>Error!</strong> Subtraction difference is more than 1!</p>
    } else {
      error = '';
    }
      return(
        <div className='task1b'>
        <h3>Task1 B</h3>
        <h4>And point of this task was to change color of those figures to white folowing Maxi-Maxi principle.
        Main question is my solution optimal. As I understood that this color swapping operation is basic Hanoi towers algoritm
        I wrote recursive hanot tower algoritm. It works great.</h4>
          <input type='text' value={this.state.inputValue} onChange={this.handleInput} placeholder="3G 4G 5B"/><br />
          <p className='notice'>Type query of figures, like: <i>3G 4G 5G</i></p>
          {error}
          <ol>
            {hanoi(this.state.inputValue, 'CHANGE_ALL_TO_WHITE').map( (elem, i) => {
              if (elem[0]){
                return ( <li key={i}>{elem}</li> )
              }

            } )}
          </ol>
        </div>
      );
  }
}



export default Task1B;
