import React from 'react';
import * as ReactRedux from 'react-redux';

// import '../../../../../heroway-git/src/css/index.css';

import { IReducers } from '../../../redux/reducer/CreateStore';
import { getGithubUser} from '../../../redux/reducer/github';

import GithubLogo from '../../img/github.svg';
import Result from '../Result';


function Nav(){

  const dispatch = ReactRedux.useDispatch();
  const [user, setUser] = React.useState('');

  //REDUCERS RETURN
  const githubState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.github;
  });
  
  
  function captureValue(event){   //JUST FOR KNOW INPUT VALUE
    const value = event.currentTarget.value;
    setUser(value);
  }
  function handleOnEnter(event){  //WHEN PRESSED ENTER 
    if(event.key === 'Enter'){
      captureValue(event);        //CALL FUNCTION CAPTURE VALUE
      const action = getGithubUser(user);   //SET AN USER 
      dispatch(action);           //DISPATCH AN ACTION
  
      return githubState;         //... FINALLY, WILL RETURN GITHUBSTATE REDUCERS
    }
  }

  return (
    <div>
      <nav className="navbar">
        <h1 className="title">
          <img 
            src={GithubLogo} 
            className="github-svg" 
            alt='githublogo'
            title='githublogo'
            />

          github user search
        </h1>

        <span className="description">
          Browse users and their profiles via
          <p className="bold"> the GitHub API</p>
        </span>

        <div className="search">
          <input 
            type="text" 
            placeholder="Type an user"
            value={user}
            onChange={captureValue}
            onKeyDown={handleOnEnter}
          />
        </div>
      </nav>
      <Result 
        users={githubState.users ? githubState.users : null} 
        loading={githubState.loading ? githubState.loading : null}
        
        />
    </div>
  )
}

export default Nav;