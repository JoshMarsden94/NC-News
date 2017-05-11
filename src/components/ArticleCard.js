import React from 'react';
import {Link} from 'react-router';
import VoteButtons from './VoteButtons';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <VoteButtons votes={props.votes} handleClick={props.voteArticle.bind(null, props._id)}/>          
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'>
              <Link to={`/articles/${props._id}`}>{props.title}</Link>
            </h3>
          </div>
        </div>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  votes: React.PropTypes.number,
  voteArticle: React.PropTypes.func,
  title: React.PropTypes.string,
  _id: React.PropTypes.string
};

export default ArticleCard;