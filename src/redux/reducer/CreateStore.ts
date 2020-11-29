import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import githubReducer from '../reducer/github/index';



const reducers = {
  github: githubReducer,
};

const rootReducer = Redux.combineReducers(reducers);
export type IReducers = ReturnType<typeof rootReducer>;


function configureStore(){

  const middlewares = Redux.applyMiddleware(ReduxThunk);
  const enhancers = ReduxDevTools.composeWithDevTools(middlewares);


  const store = Redux.createStore(rootReducer, enhancers);
  return store;
};
export default configureStore;
