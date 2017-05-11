import { expect } from 'chai';
import reducerArticles from '../src/reducer/articles.reducer.js';
// import reducerComments from '../src/reducer/comments.reducer.js';
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