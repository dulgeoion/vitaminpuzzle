import React from 'react';
import Canvas from '../Canvas';
import hanoi from './Hanoi';



class Task3A extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      request: '',
      query: '',
      queryArray: [],
      updateCanvas: false
    }

    this.handleRequest = this.handleRequest.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
    this.addToQuery = this.addToQuery.bind(this);
    this.steps = this.steps.bind(this);
  }


  handleRequest(event){
    this.setState({
      updateCanvas: false,
      request: event.target.value
    })
  }

  handleQuery(event){
    this.setState({
      updateCanvas: false,
      query: event.target.value
    })
  }

  addToQuery(event){
    let queryArray = this.state.queryArray;
    queryArray.push(this.state.query);
    this.setState({
      query: '',
      queryArray: queryArray,
      updateCanvas: true
    });
    console.log("MAIN ARRAY NOW IS:");
    console.log(queryArray);
  }

  steps(initialstate, operationList){
    console.log(operationList);
    let list = operationList.map((item)=> item.split(/,| /));
    list.map((item)=> { item[0] = +item[0] });
    let result = [];
    result.push(initialstate);
    for (var i = 0; i<list.length; i++){
      result.push(this.createString(result[i], list[i]));

    }
    console.log(result);
    return result;
  }

  createString(prev, currentChanges) {
    let prevArray = prev.split(' ').map( (item) => item.split('') );
    prevArray.map( item => {
      if (item[0] == currentChanges[0]){
        item[1] = currentChanges[2];
      }
    } );
    let result = '';
    prevArray.map((item)=> {result+= item[0]+''+item[1]+' '});
    return result.trim();
  }


  render() {
    var canvas;
    if (this.steps(this.state.request, this.state.queryArray).length>0){
      canvas = <Canvas action='EXECUTE_ALL' updateCanvas = {this.state.updateCanvas} width='600' height='150' query={this.steps(this.state.request, this.state.queryArray)} />
    }else{
      canvas = '';
    }
    return(
      <div>
        <h3>Task3 - All together!</h3>
        <h4>Visualization of all previous steps and some more thinks!</h4>
        <input type='text' value={this.state.request} placeholder="3G 4G 5B" onChange = {this.handleRequest}  /> <br />
        <p className='notice'>Add initial state</p>
        <input type='text' value={this.state.query} onChange= {this.handleQuery} placeholder="4 G B" />
        <p className='notice'>Add current operation swap</p>
        <button onClick={this.addToQuery}>Add to operation query</button>
        <h4>List of swaps</h4>
        <ol>
          {this.state.queryArray.map((query, i)=>{
            return <li key={i}>{query}</li>
          })}
        </ol>
        <h4>Swaps steps:</h4>
        <div className='swapping-color'>
          <ul>
            {this.steps(this.state.request, this.state.queryArray).map((item)=> {return <li> {item} </li>})}
          </ul>

          {canvas}
        </div>

        <br />

        <p className='notice'>P.S. There is a chance, that my solution of last task is not fully match as in task description. I found it on designing stage, almost in the end. Sorry for that!</p>
      </div>
    );
  }
}



export default Task3A;
