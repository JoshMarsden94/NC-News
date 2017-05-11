import React from 'react';
import {connect} from 'react-redux';
import {fetchComments, voteComment, postComment, formChange, deleteComment} from '../actions/actions';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import { Component } from 'react';

class Comments extends Component {
  constructor () {
    super();
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  componentDidMount () {
    this.props.getComments(this.props.id);
  }
  render () {
    if (this.props.loading && !this.props.comments.data.length) return <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />;
    if (this.props.error) return <p>404</p>;
    if (this.props.comments) {
      return (
        <div id="comments" className="container">

          {this.props.comments.data.map((comment, i) => {
            return (
              <CommentCard id={comment._id} voteComment={this.props.voteComment} key={i} body={comment.body} created_by={comment.created_by} votes={comment.votes} deleteComment={this.props.deleteComment}/>
            );
          })}
          <CommentForm id={this.props.id} _handleSubmit={this._handleSubmit} formText={this.props.formText} formChange={this._handleChange}/>
        </div>
      );
    }
  }
  _handleSubmit (id) {
    this.props.postComment(id, this.props.formText);
    this.props.formChange('');
  }
  _handleChange (e) {
    this.props.formChange(e.target.value);
  }
}

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

Comments.propTypes = {
  getComments: React.PropTypes.func,
  id: React.PropTypes.string,
  loading: React.PropTypes.bool,
  comments: React.PropTypes.object,
  error: React.PropTypes.object,
  voteComment: React.PropTypes.func,
  formText: React.PropTypes.string,
  deleteComment: React.PropTypes.func,
  postComment: React.PropTypes.func,
  formChange: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);