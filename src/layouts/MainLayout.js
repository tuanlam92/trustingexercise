import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchArticles } from './../actions/ArticleAction';
import Footer from "./../components/Footer";

import './../styles/app.scss';
import './../styles/common.scss';
import './../styles/normalize.scss';
import './../styles/responsive.scss';

@connect((store)=>{
    return {
        articles : store.article.articles
    }
})
class MainLayoutComponent extends React.Component {
    componentWillMount(){
        fetchArticles()(this.props.dispatch);
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <Header></Header>
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
}


export default MainLayoutComponent;
