import React, { Component } from 'react';
import './ReviewItem.css';

class ReviewItem extends Component {
  render() {
    const { comment,rating,ratedTime} = this.props;

    return (
      <div className="review-item" >
          <div> <strong>리뷰:</strong>{comment}</div>
          <div> <strong>별점:</strong>{rating}</div>
          <div> <strong>리뷰시간:</strong>{ratedTime}</div>
      </div>
    );
  }
}

export default ReviewItem;
