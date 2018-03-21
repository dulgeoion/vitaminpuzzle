import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';

class App extends React.Component {
  render(){
    return(
      <div>
        <BrowserRouter>
        <div>
          <Header />
            <ul className="navbar">
              <li><Link to={'/'}>Task1</Link></li>
              <li><Link to={'/task2'}>Task2</Link></li>
              <li><Link to={'/task3'}>Task3</Link></li>
            </ul>
           <Switch>
              <Route exact path='/' component={Task1} />
              <Route exact path='/task2' component={Task2} />
              <Route exact path='/task3' component={Task3} />
           </Switch>
           </div>
         </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
