import React from 'react';
import VoteButtons from './VoteButtons';

const CommentCard = function (props) {
  return (
    <div className='box comment-card'>
      <article className='media'>
        <div className='media-left'>
          <VoteButtons votes={props.votes} handleClick={props.voteComment.bind(null, props.id)}/>          
        </div>          
        <h1>{props.created_by}</h1>          
        <h1>{props.body}</h1>
        <a className="button is-danger" onClick={props.deleteComment.bind(null, props.id)}><i className='fa fa-trash-o' aria-hidden='true' ></i></a>
      </article>
    </div>
  );
};

export default CommentCard;