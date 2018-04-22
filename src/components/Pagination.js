import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { fetchArticles } from './../actions/ArticleAction';

@connect()
class PaginationComponent extends React.Component {
    constructor(props){
        super(props);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (data) =>{
        let selected = data.selected;
        // let offset = Math.ceil(selected * this.props.perPage);
        fetchArticles(selected+1)(this.props.dispatch);
        // Need dispatch
    }

    render() {            
        let totalPage = 2000/10;
        return (
            <div className="pagination">
               <ReactPaginate onPageChange={this.handlePageClick} pageCount={totalPage} pageRangeDisplayed={5} marginPagesDisplayed={5}></ReactPaginate>
            </div>
        );
    }
}

export default PaginationComponent;
