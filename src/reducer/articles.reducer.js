import * as types from '../actions/types';

const initialState = {
  byId: {},
  loading: false,
  error: null
};

function normaliseData (data) {
    return data.reduce(function (acc, item) {
        acc[item._id] = item;
        return acc;
    }, {});
}

export function getTopArticles (articles, num) {
    return Object.keys(articles.byId).reduce(function (acc, id) {
        return acc.concat(articles.byId[id]);
    }, []).sort(function (a, b) {
        return b.votes - a.votes;
    }).slice(0, num);
}

function reducerArticles (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

   if (action.type === types.VOTE_ARTICLE_SUCCESS) {
    const id = action.data._id;          
    newState.byId[id] = Object.assign({}, newState.byId[id], action.data);     
    newState.loading = false;  
  }

  if (action.type === types.FETCH_ALL_ARTICLES_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.FETCH_ALL_ARTICLES_SUCCESS) {
    newState.list = action.data;
    newState.byId = normaliseData(action.data);
    newState.loading = false;
  }

  if (action.type === types.FETCH_ALL_ARTICLES_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }


  return newState;
}

export default reducerArticles;
