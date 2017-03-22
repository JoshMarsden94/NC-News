import React from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/actions';



const Comments = React.createClass({
  componentDidMount () {
    this.props.getComments(this.props.id);
  },
  render () {
    if (this.props.loading) return <p>'Loading...'</p>;
    if (this.props.error) return <p>404</p>;
    if (this.props.comments) {
      return (
        <div className="container">
          <h3 className='title is-4'>{this.props.comments.data[0].body}</h3>          
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
