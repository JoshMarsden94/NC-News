import * as types from '../actions/types';

const initialState = {
    data: [],
    loading: true,
    error: null
};

function reducerArticlePage (prevState = initialState, action) {
    let newState = prevState;
    
    if (action.type === types.FETCH_ARTICLE_REQUEST) {
        newState = Object.assign({}, prevState);
        newState.loading = true;
    }

    if (action.type === types.FETCH_ARTICLE_SUCCESS) {
        newState = Object.assign({}, prevState);
        newState.data = action.data;
        newState.loading = false;
    }

    if (action.type === types.FETCH_ARTICLE_ERROR) {
        newState = Object.assign({}, prevState);
        newState.error = action.err;
        newState.loading = false;
    }

    return newState;
}


export default reducerArticlePage;