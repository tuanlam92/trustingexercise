import { FETCH_ARTICLES_FULLFILLED, NETWORK_ERROR, SHOW_ARTICLE_DETAIL, CLOSE_ARTICLE_DETAIL } from './../actions/ArticleAction';

export default (state = {
    articles:[],
    meta:{},
    error: false,
    errMsg: '',
    article: {}
}, action) => {
    switch (action.type) {
        case FETCH_ARTICLES_FULLFILLED:
            return Object.assign({}, state,
            {
                error: false,
                articles:action.payload.data,
                meta:action.payload.meta,
                errMsg: ''
            });
        case NETWORK_ERROR:
            return Object.assign({}, state,
            {                
                error: true,
                errMsg: action.payload.message,
                articles:[],
                meta: {},
            });
        case SHOW_ARTICLE_DETAIL:
            const article = state.articles.find(article=> article._id == action.payload);
            return Object.assign({}, state,
            {                
                error: false,
                errMsg: '',
                article: article,                
            });
        case CLOSE_ARTICLE_DETAIL:            
            return Object.assign({}, state,
            {                
                error: false,
                errMsg: '',
                article: {},                
            });
        default:
            return state;
    }
};