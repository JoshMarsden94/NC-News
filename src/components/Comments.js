import React from 'react';
import {connect} from 'react-redux';
import {fetchComments, voteComment, postComment, formChange, deleteComment} from '../actions/actions';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
   

const Comments = React.createClass({
  componentDidMount () {
    this.props.getComments(this.props.id);
  },
  render () {
    if (this.props.loading && !this.props.comments.data.length) return <p>'Loading...'</p>;
    if (this.props.error) return <p>404</p>;
    if (this.props.comments) {
      return (
        <div id="comments" className="container">

          {this.props.comments.data.map((comment, i) => {
            return (
              <CommentCard id={comment._id} voteComment={this.props.voteComment} key={i} body={comment.body} created_by={comment.created_by} votes={comment.votes} deleteComment={this.deleteComment}/>
            );
          })}
          <CommentForm id={this.props.id} handleSubmit={this.handleSubmit} formText={this.props.formText} formChange={this.handleChange}/>
        </div>
      );
    }
  },
  handleSubmit (id) {
    this.props.postComment(id, this.props.formText)
    this.props.formChange('');
  },
  handleChange (e) {
    this.props.formChange(e.target.value);
  },
  deleteComment (id) {
    this.props.deleteComment(id);
  }
});

function mapDispatchToProps (dispatch) {
  return {
    getComments: (id) => {
      dispatch(fetchComments(id));
    },   
    voteComment: (id, vote) => {
      dispatch(voteComment(id, vote));
    },
    postComment: (id, comment) => {
      dispatch(postComment(id, comment));
    },
    formChange: e => {
      dispatch(formChange(e));
    },
    deleteComment: (id) => {
      dispatch(deleteComment(id));
    }     
  };
}

function mapStateToProps (state) {
  return {
    comments: state.comments,
    loading: state.comments.loading,
    error: state.comments.error,
    formText: state.comments.formText
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);