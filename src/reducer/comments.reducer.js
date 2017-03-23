import * as types from '../actions/types';

const initialState = {
    data: [],
    loading: false,
    error: null,
    formText: ''
};

function reducerComments (prevState = initialState, action) {
    const newState = Object.assign({}, prevState);  

    if (action.type === types.FORM_CHANGE) {
        newState.formText = action.data;
    }

    if (action.type === types.POST_COMMENT_REQUEST) {
        newState.loading = true;
    }

    if (action.type === types.POST_COMMENT_SUCCESS) {
        const newComment = action.data.data.comment;
        const id = newComment.belongs_to;
        newState.comments = Object.assign({}, newState.comments);
        newState.comments[id] = newComment;
        newState.loading = false;
    }

    if (action.type === types.POST_COMMENT_ERROR) {
        newState.error = action.data;
        newState.loading = false;
    }

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
