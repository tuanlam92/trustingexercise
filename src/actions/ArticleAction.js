import { getArticles } from './../api/ArticleApi';

export const FETCH_ARTICLES_FULLFILLED = 'FETCH_ARTICLES_FULLFILLED';
export const NETWORK_ERROR = 'NETWORK_ERROR';
export const SHOW_ARTICLE_DETAIL = 'SHOW_ARTICLE_DETAIL';
export const CLOSE_ARTICLE_DETAIL = 'CLOSE_ARTICLE_DETAIL';

export function fetchArticles(pageIndex = 1){
    return function(dispatch){
        getArticles(pageIndex).then((res)=>{
            dispatch({type:FETCH_ARTICLES_FULLFILLED, payload: {
                data: res.data.response.docs,
                meta: res.data.response.meta
            }});
        }).catch(err=>{
            dispatch({type: NETWORK_ERROR, payload:{                
                message: err.message
            }});
        });
    }
}

export function fetchArticlesFullFilled(data) {
    return {
        type: FETCH_ARTICLES_FULLFILLED,
        payload: data
    }
}

export function showArticleDetail(articleId) {
    return {
        type: SHOW_ARTICLE_DETAIL,
        payload: articleId
    }
}

export function closeArticleDetail() {
    return {
        type: CLOSE_ARTICLE_DETAIL,
        payload: ''
    }
}

