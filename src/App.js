import React, { Component } from 'react';
import Counter from './views/Counter'

import './store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
