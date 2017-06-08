'use strict';
import React, { PropTypes } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { fetchNextReviewPage, switchMenu, fetchMenuNames } from '../actions';
import Table from '../components/table';
import Search from '../components/search';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewData: [],
            currentReviewPage: 0,
            menuIdx: 0,
        };
    }

    componentDidMount() {
    	const { dispatch } = this.props;
        dispatch(fetchNextReviewPage());
        dispatch(fetchMenuNames());
    }

    render() {
        const {
            reviews,
            dispatch
        } = this.props;
        return (
            <div>
                <Search
                  selectMenu={menuIdx => dispatch(switchMenu(menuIdx))}
                  menuNames={this.props.menuNames}
                />
                <Table rowData={reviews} menuNames={this.props.menuNames} />
                <button className="button" onClick={()=>dispatch(fetchNextReviewPage())}>다음 리뷰</button>
                <div className="padding" />
            </div>
        );
    }
}

function select(state){
    return {
        reviews: state.reviews,
        menuNames: state.menuNames,
    };
}
export default connect(select)(Page);
