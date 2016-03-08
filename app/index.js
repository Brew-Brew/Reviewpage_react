'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table';


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewData: [],
            currentReviewPage: 0
        };
    }

    componentDidMount() {
        this.fetchReview();
    }

    fetchReview() {
        const onResponse = reviewData => {
            const newReviewData = this.state.reviewData.concat(reviewData);
            this.setState({
                reviewData: newReviewData,
                currentReviewPage: this.state.currentReviewPage + 1
            });
        };

        $.get('review', {
            index: this.state.currentReviewPage
        }).done(onResponse.bind(this));
    }

    render() {
        return (
            <div>
                <Table rowData={this.state.reviewData} />
                <button onClick={this.fetchReview.bind(this)}>다음 리뷰</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('main')
);