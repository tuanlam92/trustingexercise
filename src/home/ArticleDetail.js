import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../components/Modal';
import { connect } from 'react-redux';
import { closeArticleDetail } from './../actions/ArticleAction';

@connect((store)=>{
    return{
        article : (store.article.article) ? store.article.article : {}
    }    
})
class ArticleDetailComponent extends React.Component {  
    constructor(props){
        super(props)
        this.handlingClose = this.handlingClose.bind(this);
    }

    handlingClose(){
        this.props.dispatch(closeArticleDetail());
    }

    render() {
        const title = 'Article detail';
        const base_url = 'https://www.nytimes.com/';
        const article = (this.props.article) ? this.props.article : {};
        const openPopup = (Object.keys(article).length > 0) ? true : false;   
        const mediaUrl = (article.multimedia && article.multimedia.length > 0) ? base_url + article.multimedia[0].url : 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png';
        const content = 
        <div>
           <div className="news">
                <div className="media-box" >
                    {/* Recieve media Height from outside */}                    
                    <img className="media" src={mediaUrl} alt=""/>
                </div>
                <div className="sub-info">
                    <div className="material-type">{article.type_of_material}</div>
                    <div className="pub-date">{article.pub_date}</div>
                </div>
                <p className="snippet">
                    {article.snippet}
                </p>
                <div className="source">
                    <span>By: <span className="source-name">{article.source}</span></span>
                </div>
            </div>
        </div>        
        return (
            <Modal title={title} content={content} open={openPopup} handlingClose={this.handlingClose}></Modal>
        );
    }
}

ArticleDetailComponent.propTypes = {};

export default ArticleDetailComponent;
