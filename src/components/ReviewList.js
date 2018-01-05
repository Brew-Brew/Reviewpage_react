import React, { Component } from 'react';
import ReviewItem from './ReviewItem';

class ReviewList extends Component {
  render() {
    const { reviews } = this.props;

    const reviewList = reviews.map(
      ({menu, score, reviewTime,orderTime,review}) => (
        <ReviewItem
          menu={menu}
          score={score}
          reviewTime={reviewTime}
          orderTime={orderTime}
          review={review}
        />
      )
    );
    return (
      <div>
        {reviewList}
      </div>
    );
  }
}

export default ReviewList;
