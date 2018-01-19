import React, { Component } from 'react';
import classnames from 'classnames/bind';
import moment from 'moment';

import css from './ReviewItem.css';
import StarRating from './StarRating'
const cx = classnames.bind(css);
moment.locale('ko');

function ReviewItem(props) {
  const { comment, rating, ratedTime, menu} = props;
  let Time = moment(new Date(ratedTime)).format('YYYY년 MM월 DD일 HH:mm')
  console.log(Time);
  return (
    <div className="review-item">
      <div className="review-title">
        {menu.shortName}
      </div>
      <div className="review-detail">
        {' '}
        <strong>{comment} </strong><br/>
        {ratedTime}
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
      </div>

      <div>

      </div>
    </div>
  );
}

export default ReviewItem;
