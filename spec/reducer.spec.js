import { expect } from 'chai';
import reducerArticles from '../src/reducer/articles.reducer.js';
import reducerComments from '../src/reducer/comments.reducer.js';
import * as actions from '../src/actions/actions.js';

describe('voteArticle', () => {
    const article = {data : { _id: 123, votes: 5 }};
    const action = actions.voteArticleSuccess(article.data);
    const initialState = {
        byId: {
            123: { _id: 123, votes: 2 }
        },
        loading: true
    };
    it('updates vote of article in the state', () => {
        let actual = reducerArticles(initialState, action);
        let expected = {
            byId: {
                123: { _id: 123, votes: 5 }
            },
            loading: false
        };
        expect(actual).to.eql(expected);
    });
    it('does not mutate the original state', () => {
        const newState = reducerArticles(initialState, action);
        expect(newState).to.not.equal(initialState);
    }); 
});

describe('voteComment', () => {
    const comment = {_id: 123};
    const action = actions.voteCommentSuccess(comment._id, 'up');
    const initialState = {
        data: [
                {
                    _id: 123,
                    votes: 2
                }
            ]
    };
    it('updates vote of article in the state', () => {
        let actual = reducerComments(initialState, action);
        let expected = {
            data: [
                    {
                        _id: 123,
                        votes: 3
                    }
                ]
        };
        expect(actual).to.eql(expected);
    });
    it('does not mutate the original state', () => {
        const newState = reducerComments(initialState, action);
        expect(newState).to.not.equal(initialState);
    });     
});

describe('formChange', () => {
    const action = actions.formChange('H');
    const action2 = actions.formChange('Hi');
    const initalState = {
        formText : ''
    };

    it('it updates formText in the state', () => {
        const expected = {formText: 'Hi'};
        const actual = reducerComments(initalState, action);
        const actual2 = reducerComments(actual, action2);
        expect(actual2).to.eql(expected);
    });
});

describe('postComment', () => {
    const initalState = {data:[]};
    const action = actions.postCommentSuccess({data:{comment: {_id:'123', body: 'hello'}}});
    it('updates the comments with the new comment', () => {
        let actual = reducerComments(initalState, action) ;
        let expected = {data:[{_id:'123', body: 'hello'}], loading: false} ;
        expect(actual).to.eql(expected);
    });
    it('does not mutate the original state', () => {
        const newState = reducerComments(initalState, action);
        expect(newState).to.not.equal(initalState);
    }); 
});

describe('deleteComment', () => {
    const initalState = {data:[{_id: 123, body: 'hello'}]};
    const action = actions.deleteCommentSuccess(123);
    it('deletes comment from state', () => {
        let actual = reducerComments(initalState, action) ;
        let expected = {data:[]};
        expect(actual).to.eql(expected);
    });
    it('does not mutate the original state', () => {
        const newState = reducerComments(initalState, action);
        expect(newState).to.not.equal(initalState);
    }); 
});