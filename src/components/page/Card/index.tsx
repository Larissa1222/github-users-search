import React from 'react';
import '../../../../../heroway-git/src/index.css';
import { IUser } from '../../../redux/reducer/github';


interface Cards{
  user: IUser['user'],
}
function Card(props: Cards){
  return (
    <>
      {props.user.map((gituser) =>{
        return(
          <div className="result-user" key={props.user['id']}>
          <img 
            src={props.user['avatar_url']} 
            className="user-image" />
          <p className="user-name">{props.user['login']}</p> 
        </div>
        );})
      }
    </>
  );
}

export default Card;
