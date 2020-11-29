import React from 'react';
// import '../../../../../heroway-git/src/css/index.css';

//interface to receive props from Result component
interface ICards{
  login: string;
  id: number;
  avatar_url: string;
}
function Card(props: ICards){
  return (
    <>
      <div className="result-user" key={props.id}>
        <img 
          className="user-image" 
          src={props.avatar_url} 
          alt={props.login}
          title={props.login}
          />
        <p className="user-name">{props.login}</p> 
      </div>
    </>
  );
}

export default Card;
