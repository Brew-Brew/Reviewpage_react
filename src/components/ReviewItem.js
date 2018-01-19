import React, { Component } from 'react';
import classnames from 'classnames/bind';

import css from './ReviewItem.css';
import StarRating from './StarRating'
const cx = classnames.bind(css);

function ReviewItem(props) {
  const { comment, rating, ratedTime, menu} = props;

  return (
    <div className="review-item">
      <div className="review-title">
        {menu.shortName}
      </div>
      <div className="review-detail">
        {' '}
        <strong>{comment}</strong>
      </div>
      <div className="review-bottom">
        {' '}
        <StarRating
          className={cx(`MenuDetail-review-StarRating`)}
          rating={rating}
          color='#ef8e2b'
          size="1.2rem"
                        />
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
