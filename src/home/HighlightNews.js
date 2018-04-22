import React from 'react';
import News from './../components/News';
import { connect } from 'react-redux';

@connect((store)=>{
    return {
        articles : store.article.articles,
        error: store.article.error
    }    
})
class HightLightNewsComponents extends React.Component {

    render() {  
        // Get the rest article without three first items  
        if(!this.props.error){
            const hightLightArticles = (this.props.articles) ? this.props.articles.map((article,i)=>{
                if(i>=3){
                    return <News article={article} mediaHeight={{height: '250px'}}></News>
                }         
            }) : [];
            console.log(this.props); 
            return (
    
                <div className="high-light">
                    <div className="title">
                        <h4>Highlights</h4>
                    </div>
                    <div className="articles">
                        {hightLightArticles}                    
                    </div>
                </div>
            );
        } else{
            return (
                <div></div>
            )
        }       
    }
}

export default HightLightNewsComponents;
