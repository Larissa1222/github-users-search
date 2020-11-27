import React from 'react';
import * as ReactRedux from 'react-redux';

import './index.css';

import CreateStore from './redux/reducer/CreateStore';
import Nav from './components/page/Nav';
import Result from './components/page/Result';


const store = CreateStore();

function App() {
  return (
    <ReactRedux.Provider store={store}>
      <Nav/>
      <Result/>
    </ReactRedux.Provider>
  );
}

export default App;
