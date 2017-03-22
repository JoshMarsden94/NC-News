import React from 'react';
import {connect} from 'react-redux';
import {fetchComments, voteComment} from '../actions/actions';
import CommentCard from './CommentCard';
   

const Comments = React.createClass({
  componentDidMount () {
    this.props.getComments(this.props.id);
  },
  render () {
    if (this.props.loading) return <p>'Loading...'</p>;
    if (this.props.error) return <p>404</p>;
    if (this.props.comments) {
      return (
        <div id="comments" className="container">

          {this.props.comments.data.map((comment, i) => {
            return (
              <CommentCard id={comment._id} voteComment={this.props.voteComment} key={i} body={comment.body} created_by={comment.created_by} votes={comment.votes}/>
            );
          })}
        
        </div>
      );
    }
  }
});

function mapDispatchToProps (dispatch) {
  return {
    getComments: (id) => {
      dispatch(fetchComments(id));
    },   
    voteComment: (id, vote) => {
      dispatch(voteComment(id, vote));
    }     
  };
}

function mapStateToProps (state) {
  return {
    comments: state.comments,
    loading: state.comments.loading,
    error: state.comments.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
