import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import feedSerenaApp from './reducers';
import './App.css';

import Header from './Header';
import Game from './Game';

const store = createStore(feedSerenaApp);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Game />
    </div>
    </Provider>
  );
}

export default App;
