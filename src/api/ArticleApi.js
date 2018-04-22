import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/';
const API_KEY = '2f67a646049f4e5c8c6aaf80f2fb3c04';

export function getArticles(pageIndex = 1){
    const request = axios.get(`${BASE_URL}/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=singapore&page=${pageIndex}`);
    return request;
}