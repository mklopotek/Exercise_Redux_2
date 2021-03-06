import React, { Component } from 'react';
import Counter from './views/Counter'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './store'
import Calculator from './views/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to={'/calculator'}> Calculator </Link>
            <Link to={'/counter'}> Counter </Link>

            <Route path={'/'} exact component={Calculator} />
            <Route path={'/calculator'} component={Calculator} />
            <Route path={'/counter'} component={Counter} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
