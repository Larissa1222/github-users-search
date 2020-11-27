import React from 'react';
import * as ReactRedux from 'react-redux';

import '../../../../../heroway-git/src/index.css';

import { IReducers } from '../../../redux/reducer/CreateStore';
import { getGithubUser} from '../../../redux/reducer/github';

import GithubLogo from '../../img/github.svg';
import search from '../../img/search.svg';
import Result from '../Result';

let TIMEOUT_ID = null;  //pra nao ficar rodando toda vez o settimeout

function Nav(){

  const dispatch = ReactRedux.useDispatch();
  const [user, setUser] = React.useState('');

  //RETURN DOS REDUCERS
  const githubState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.github;
  });
  
  
  function handleChange(event){//DO INPUT QUANDO MUDADO VALOR
    const value = event.currentTarget.value;//capturar valor do input 
    setUser(value);
    

    //PRA OS TRÊS PONTOS NAO FICAREM CONSTANTES:
    clearTimeout(TIMEOUT_ID);//pra limpar o timeout
    TIMEOUT_ID = setTimeout(() =>{
      setUser(value);//td isso pra só executar o dispatch uma unica vez
    }, 1000);
    
  }
  function handleOnEnter(event){//COMO SE FOSSE BOTÃO
    if(event.key === 'Enter'){
      handleClick();
    }
  }
  function handleClick(){//DO BOTÃO
    const action = getGithubUser(user);
    dispatch(action);
  }


  return (
    <div>
      <nav className="navbar">

        <h1 className="title">
          <img src={GithubLogo} className="github-svg"/>
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
            onChange={handleChange}
            onKeyDown={handleOnEnter}
            />
          <button>
            <img src={search} 
              onClick={handleClick}
            className="search-svg"/>
          </button>
        </div>
      </nav>

      <span>{githubState.loading}</span>
    </div>
  )
}

export default Nav;