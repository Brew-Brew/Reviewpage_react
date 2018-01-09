import React, { Component } from 'react';
import ReviewItem from './ReviewItem';

class ReviewList extends Component {
  render() {
    const { reviews } = this.props;

    const reviewList = reviews.map(
      ({comment,rating,ratedTime}) => (
        <ReviewItem
          comment={comment}
          rating={rating}
          ratedTime={ratedTime}
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
