import React from 'react';
import VoteButtons from './VoteButtons';

const CommentCard = function (props) {
  const canDelete = props.created_by === 'northcoder' ? <a onClick={props.deleteComment.bind(null, props.id)}><i className='fa fa-trash-o fa-2x' aria-hidden='true'></i></a> : '';
  return (
    <div className='box'>
      <div className='columns is-mobile'>
        <div className='column is-1' id='flex-centered'>
          <div className='votes-container'>
            <VoteButtons votes={props.votes} handleClick={props.voteComment.bind(null, props.id)}/>                    
          </div>
        </div>
        <div className='column' id='flex-centered'>
          <h4 id='comment-heading' className='title is-5'>{props.created_by}</h4>
          <div>{props.body}</div>
        </div>
        <div className='column is-1' id='flex-centered'>
          {canDelete}
        </div>
      </div>
    </div>
  );
};

CommentCard.propTypes = {
  created_by: React.PropTypes.string,
  deleteComment: React.PropTypes.func,
  id: React.PropTypes.string,
  votes: React.PropTypes.number,
  voteComment: React.PropTypes.func,
  body: React.PropTypes.string
};

export default CommentCard;