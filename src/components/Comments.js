import React from 'react';
import {connect} from 'react-redux';
import {fetchComments, voteComment, postComment, formChange} from '../actions/actions';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
   

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
          <CommentForm id={this.props.id} handleSubmit={this.props.handleSubmit} formText={this.props.formText} formChange={this.props.formChange}/>
        </div>
      );
    }
  },
  handleSubmit (id, e) {
    e.preventDefault();
    this.props.postComment(id, this.props.formText)
    this.props.formChange('');
  },
  handleChange (e) {
    this.props.formChange(e.target.value);
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
