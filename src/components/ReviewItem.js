import React, { Component } from 'react';
import './ReviewItem.css';

function ReviewItem(props) {
  const { comment, rating, ratedTime } = props;

  return (
    <div className="review-item">
      <div className="review-detail">
        {' '}
        <strong>{comment}</strong>
      </div>
      <div className="review-bottom">
        {' '}
        <strong>별점:</strong>
        {rating}
        {' '}
        <strong>리뷰시간:</strong>
        {ratedTime}
      </div>
      <div>

      </div>
    </div>
  );
}

export default ReviewItem;
