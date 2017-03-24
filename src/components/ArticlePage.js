import React from 'react';
import {connect} from 'react-redux';
import {fetchArticle} from '../actions/actions';
import Comments from './Comments';

const ArticlePage = React.createClass({
  componentDidMount () {
    this.props.getArticle(this.props.params.article_id);
  },
  render () {
    if (this.props.loading) return <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />;
    if (this.props.error) return <p>404</p>;
    if (this.props.article) {
      return (
        <div className="container">
          <p>{this.props.article.belongs_to}</p>
          <h3 className='title is-3'>{this.props.article.title}</h3>
          <p className=''><strong>{this.props.article.created_by}</strong></p>
          <p className=''>{this.props.article.body}</p>
          <div className="article-comments">
          </div>
          <Comments id={this.props.article._id}/>
        </div>
      );
    }
      
  }
});

function mapDispatchToProps (dispatch) {
  return {
    getArticle: (id) => {
      dispatch(fetchArticle(id));
    },    
  };
}

function mapStateToProps (state) {
  return {
    article: state.article.data[0],
    loading: state.article.loading,
    error: state.article.error,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);