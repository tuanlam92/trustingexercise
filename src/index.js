import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './home/Home';
import { Provider } from 'react-redux';
import store from './store';

const MainLayoutRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <MainLayout>
            <Component {...matchProps} />
        </MainLayout>
      )} />
    )
};

// Render the main component into the dom
ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
      <MainLayoutRoute path="/" component={Home}></MainLayoutRoute>
    </Provider>    
</BrowserRouter>, document.getElementById('app'));
