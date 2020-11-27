import React from 'react';
import * as ReactRedux from 'react-redux';
import '../../../../../heroway-git/src/index.css';
import { IReducers } from '../../../redux/reducer/CreateStore';
import Card from '../Card';


function Result(){
  
  const githubState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.github;
  });

  return (
    <div className="result">
      
      {githubState.user ? <Card user={[githubState.user['gituser']]}/> : null}
       
    </div>
  );
}

export default Result;
