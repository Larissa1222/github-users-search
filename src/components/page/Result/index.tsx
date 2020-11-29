import React from 'react';
// import '../../../../../heroway-git/src/css/index.css';

import Card from '../Card';

//INTERFACE TO RECEIVE INFORMATION FROM GITHUBSTATE(REDUCERS) ON NAV COMPONENT
interface IResult{  
  users: any [],
  loading: boolean,
}

function Result(props: IResult){

  if(props.loading){  //INFORM USER IF IT'S LOADING
    return(
    <p className="center-text">Loading, please wait</p>
    )
  }
  //MAP COMPONENT CARD TO SHOW ALL USERS
  return (
    <>
      <div className="center-text">
        Results: 
        {props.users &&
          props.users.length ?  props.users.length : 'None'}
      </div>

      <div className="result">
        {props.users && props.users.map((current: any) =>
          <Card 
            id={current.id}
            key={current.id}
            avatar_url={current.avatar_url}
            login={current.login}
            />
          )}
      </div>
    </>
  );
}

export default Result;