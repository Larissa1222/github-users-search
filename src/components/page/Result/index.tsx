import React from 'react';
import * as ReactRedux from 'react-redux';
import '../../../../../heroway-git/src/index.css';
import { IReducers } from '../../../redux/reducer/CreateStore';
import { IUser } from '../../../redux/reducer/github';



function Result(){
  const githubState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.github;
  });
  return (
    <div className="result">
      
      <div className="result-user">
        <img 
          // src={githubState.user.avatar_url} 
          className="user-image" />
        {/* <p className="user-name">{githubState.user.login}</p>  */}
      </div>
       
    </div>
  );
}

export default Result;