import React from 'react';
import News from './../components/News';
import {connect} from 'react-redux';

@connect((store)=>{
    return {
        articles : store.article.articles,
        error: store.article.error,
        errMsg: store.article.errMsg
    }
})
class TopThreeNews extends React.Component {

    render() {
        // Show three first items
        if(!this.props.error){
            const articles = (this.props.articles && this.props.articles.length>0) ? this.props.articles : [];
            return(
                <div className="top-three">
                    <div className="left-news">
                        <News article={articles[0]} mediaHeight={{height: '320px'}}></News>
                    </div>
                    <div className="right-news">
                        <News article={articles[1]} mediaHeight={{height: '140px'}}></News>
                        <News article={articles[2]} mediaHeight={{height: '140px'}}></News>
                    </div>
                </div> 
            );       
        }else{
            return (
                <div className="error-msg text-align-center">
                    We are getting error: {this.props.errMsg}. Sorry guys! Please don't paging to much.                    
                </div>
            )
        }         
    }
}

export default TopThreeNews;
