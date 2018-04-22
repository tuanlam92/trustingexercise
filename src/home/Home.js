

import React from 'react';
import TopThreeNews from './TopThreeNews';
import HighlightNews from './HighlightNews';
import Pagination from './../components/Pagination';
import ArticleDetail from './ArticleDetail';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="wrap">
        <div className="body">
          <TopThreeNews></TopThreeNews>
          <HighlightNews></HighlightNews>
          <Pagination></Pagination>
          <ArticleDetail></ArticleDetail>          
        </div>
      </div>
    );
  }
}

export default HomeComponent;
