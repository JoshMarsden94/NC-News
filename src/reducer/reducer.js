import {combineReducers} from 'redux';

import reducerArticles from './articles.reducer';
import reducerTopics from './topics.reducer';
import reducerArticlePage from './article.page.reducer';
import reducerComments from './comments.reducer';


const reducer = combineReducers({
    articles: reducerArticles,
    topics: reducerTopics,
    article: reducerArticlePage,
    comments: reducerComments
});

export default reducer;