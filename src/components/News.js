import React from 'react';
import logo from '../images/logo.png';
import {showArticleDetail} from './../actions/ArticleAction';
import {connect} from 'react-redux';

@connect()
class NewsComponents extends React.Component {
    constructor(props){
        super(props);
        this.showDetail = this.showDetail.bind(this);
    }

    showDetail(){
        this.props.dispatch(showArticleDetail(this.props.article._id));
    }

    render() {    
        
        const article = (this.props.article) ? this.props.article : {};
        const mediaUrl = (article.multimedia && article.multimedia.length > 0) ? `https://www.nytimes.com/${this.props.article.multimedia[0].url}` : 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'; 
        let dateFormat = (article.pub_date) ? new Date(article.pub_date).toISOString().slice(0,10) : '';
        return (
            <div className="news" onClick={this.showDetail}>
                <div className="media-box" >
                    {/* Recieve media Height from outside */}
                    <img className="media" style={this.props.mediaHeight} src={mediaUrl} alt=""/>
                </div>
                <div className="sub-info">
                    <div className="material-type">{article.type_of_material}</div>
                    <div className="pub-date">{dateFormat}</div>
                </div>
                <p className="snippet">
                    {article.snippet}
                </p>
                <div className="source">
                    <span>By: <span className="source-name">{article.source}</span></span>
                </div>
            </div>
        );
    }
}

export default NewsComponents;
