import React from 'react';
import {connect} from 'react-redux';
import {fetchAllArticles, voteArticle} from '../actions/actions';
import ArticleCard from './ArticleCard';
import NavbarTopics from './NavbarTopics';
import _ from 'underscore';
import { Component } from 'react';

import { getTopArticles } from '../reducer/articles.reducer';

class ArticleList extends Component {
  componentDidMount () {
    this.props.getArticles();
  }
  render () {

    return (
      <div>

        <NavbarTopics />
        
        <div id='ArticleList' className="container">

            {!this.props.params.topic && _.map(getTopArticles(this.props.articles, 10), (article, i) => {
              return <ArticleCard {...article} voteArticle={this.props.voteArticle} key={i}/>;
            })}

            {this.props.params.topic && _.map(this.props.articles.byId, (article, i) => {
              if (article.belongs_to === this.props.params.topic) {
              return <ArticleCard {...article} voteArticle={this.props.voteArticle} key={i}/>;
            }
            })}

        </div>
      </div>
    );
  }

}

function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchAllArticles());
    },
    voteArticle: (id, vote) => {
      dispatch(voteArticle(id, vote));
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles,
    loading: state.articles.loading,
    error: state.articles.error
  };
}

ArticleList.propTypes = {
  getArticles: React.PropTypes.func,
  params: React.PropTypes.object,
  topic: React.PropTypes.string,
  articles: React.PropTypes.object,
  voteArticle: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);