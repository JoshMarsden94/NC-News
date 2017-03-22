import * as types from './types';
import axios from 'axios';

import {ROOT} from '../../config';

// Articles
export function fetchAllArticles () {
    return function (dispatch) {
        dispatch(fetchAllArticlesRequest());
        axios
            .get(`${ROOT}/articles`)
            .then(res => {
                dispatch(fetchAllArticlesSuccess(res.data.articles));
            })
            .catch(err => {
                dispatch(fetchAllArticlesError(err));
            });
    };
}

export function fetchAllArticlesRequest () {
    return {
        type: types.FETCH_ALL_ARTICLES_REQUEST
    };
}

export function fetchAllArticlesSuccess (articles) {
    return {
        type: types.FETCH_ALL_ARTICLES_SUCCESS,
        data: articles
    };
}

export function fetchAllArticlesError (err) {
    return {
        type: types.FETCH_ALL_ARTICLES_ERROR,
        data: err
    };
}


// Topics
export function fetchTopics () {
    return function (dispatch) {
        dispatch(fetchTopicsRequest());
        axios
            .get(`${ROOT}/topics`)
            .then(res => {
                dispatch(fetchTopicsSuccess(res.data.topics));
            })
            .catch(err => {
                dispatch(fetchTopicsError(err));
            });
    };
}

export function fetchTopicsRequest () {
    return {
        type: types.FETCH_TOPICS_REQUEST
    };
}
export function fetchTopicsSuccess (topics) {
    return {
        type: types.FETCH_TOPICS_SUCCESS,
        data: topics
    };
}
export function fetchTopicsError (err) {
    return {
        type: types.FETCH_TOPICS_ERROR,
        data: err
    };
}

// Specific Article
export function fetchArticle (id) {
    return function (dispatch) {
        dispatch(fetchArticleRequest(id));
        axios
            .get(`${ROOT}/articles/`)
            .then(res => {
                dispatch(fetchArticleSuccess(res.data.articles.filter((article) => {
                    return article._id === id;
                }) 
                ));
            })
            .catch(err => {
                dispatch(fetchArticleError(err));
            });
    };
}

export function fetchArticleRequest () {
    return {
        type: types.FETCH_ARTICLE_REQUEST
    };
}

export function fetchArticleSuccess (article) {
    return {
        type: types.FETCH_ARTICLE_SUCCESS,
        data: article
    };
}

export function fetchArticleError (err) {
    return {
        type: types.FETCH_ARTICLE_ERROR,
        data: err
    };
}

// Voting Articles
export function voteArticle (id, vote) {
    return function (dispatch) {
        dispatch(voteArticleRequest());
        axios.put(`${ROOT}/articles/${id}?vote=${vote}`)
        .then((res) => {
            dispatch(voteArticleSuccess(res.data));
        })
        .catch((error) => {
            dispatch(voteArticleError(error.message));
        });        
    };
}

function voteArticleRequest () {
    return {
        type: types.VOTE_ARTICLE_REQUEST
    };
}

function voteArticleSuccess (data) {
    return {
        type: types.VOTE_ARTICLE_SUCCESS,
        data
    };
}

function voteArticleError (error) {
    return {
        type: types.VOTE_ARTICLE_ERROR,
        error
    };
}

// Comments
export function fetchComments (id) {
    return function (dispatch) {
        dispatch(fetchCommentsRequest());
        axios.get(`${ROOT}/articles/${id}/comments`)
        .then((res) => {
            dispatch(fetchCommentsSuccess(res.data.comments));
        })
        .catch((error) => {
            dispatch(fetchCommentsError(error.message));
        });        
    };
}

function fetchCommentsRequest () {
    return {
        type: types.FETCH_COMMENTS_REQUEST
    };
}

function fetchCommentsSuccess (comments) {
    return {
        type: types.FETCH_COMMENTS_SUCCESS,
        data: comments
    };
}

function fetchCommentsError (error) {
    return {
        type: types.FETCH_COMMENTS_ERROR,
        error
    };
}

// Voting Comments
export function voteComment (comment_id, vote) {
  return function (dispatch) {
    dispatch(voteCommentRequest());
    axios
      .put(`${ROOT}/comments/${comment_id}?vote=${vote}`)
      .then((res) => {
        dispatch(voteCommentSuccess(comment_id, vote));
        console.log("RES DATA", res.data)
      })
      .catch((error) => {
        dispatch(voteCommentError(error.message));
      });
  };
}

export function voteCommentRequest () {
  return {type: types.VOTE_COMMENT_REQUEST};
}

export function voteCommentSuccess (comment_id, vote) {
  return {
    type: types.VOTE_COMMENT_SUCCESS,
    comment_id, 
    vote
  };  
}

export function voteCommentError (error) {
  return {
    type: types.VOTE_COMMENT_ERROR,
    error
  };
}