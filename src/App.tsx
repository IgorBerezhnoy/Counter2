import React from 'react';

import './App.css';
import {Counter2} from './Components2/Counter2';
import {CounterRouter} from './ComponentsRouter/CounterRouter';
import {HashRouter} from 'react-router-dom';
function App() {
  return (
      <HashRouter>
          <div className="App">
              <Counter2/>
              <CounterRouter/>
          </div>
      </HashRouter>
  );
}

export default App;

