 import { applyMiddleware, createStore } from 'redux';
 import promise from 'redux-promise-middleware';

 import reducers from './reducers/index';

 export default createStore(reducers);