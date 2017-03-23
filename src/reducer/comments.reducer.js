import * as types from '../actions/types';

const initialState = {
    data: [],
    loading: true,
    error: null
};

function reducerComments (prevState = initialState, action) {
    const newState = Object.assign({}, prevState);  
    

    if (action.type === types.VOTE_COMMENT_SUCCESS) {
       let newData = newState.data;
       newData.map(comment => {
           if (comment._id === action.comment_id) {
               if (action.vote === 'up') {
                   comment.votes++;
                   return comment;
               } else {
                   comment.votes--;
                   return comment;
               }
           }
           return comment;
       });
    }
 
    if (action.type === types.FETCH_COMMENTS_REQUEST) {
        newState.loading = true;
        newState.error = null;
    }

    if (action.type === types.FETCH_COMMENTS_SUCCESS) {
        newState.data = action.data;
        newState.loading = false;
    }

    if (action.type === types.FETCH_COMMENTS_ERROR) {
        newState.error = action.err;
        newState.loading = false;
    }

    return newState;
}

export default reducerComments;
