import React, {Fragment} from 'react';
import Task1A from './subtasks/Task1A';
import Task1B from './subtasks/Task1B';

class Task1 extends React.Component {


  render() {
    return(
      <div className='container task1' >
        <Task1A />
        <Task1B />
      </div>
    );
  }
}



export default Task1;
