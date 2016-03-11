'use strict';
import React, { PropTypes } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { fetchNextReviewPage, switchMenu } from '../actions';
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
    	const { dispatch, selectedReddit } = this.props;
        dispatch(fetchNextReviewPage());
    }
    render() {
        const {
            reviews,
            dispatch
        } = this.props;
        return (
            <div>
                <Search selectMenu={
                    menuIdx => dispatch(switchMenu(menuIdx))
                }/>
                <Table rowData={reviews} />
                <button className="button" onClick={()=>dispatch(fetchNextReviewPage())}>다음 리뷰</button>
                <div className="padding" />
            </div>
        );
    }
}

function select(state){
    return {
        reviews: state.reviews
    };
}
export default connect(select)(Page);
