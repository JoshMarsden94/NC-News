import React from 'react';

const CommentCard = function (props) {
  return (
    <div className='box comment-card'>
      <article className='media'>
        <h1>{props.votes}</h1>          
        <h1>{props.created_by}</h1>          
        <h1>{props.body}</h1>
      </article>
    </div>
  );
};

export default CommentCard;
