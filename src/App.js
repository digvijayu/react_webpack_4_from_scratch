import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SomePage from './Pages/SomePage'
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/somepage'>Roster</Link></li>
            </ul>
          </nav>
        </header>
        <div>
        <main>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/somepage' component={SomePage}/>
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
