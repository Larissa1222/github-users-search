import React from 'react';
import * as ReactRedux from 'react-redux';

import '../src/css/index.css';

import CreateStore from './redux/reducer/CreateStore';
import Nav from './components/page/Nav';


const store = CreateStore();

function App() {
  return (
    <ReactRedux.Provider store={store}>
      <Nav/>
    </ReactRedux.Provider>
  );
}

export default App;
