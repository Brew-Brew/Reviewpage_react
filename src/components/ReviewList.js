import React, { Component } from 'react';
import ReviewItem from './ReviewItem';

function ReviewList(props) {
  const { reviews } = props;
  const reviewList = reviews.map(({ comment, rating, ratedTime, menu}) => (
    <ReviewItem comment={comment} rating={rating} ratedTime={ratedTime} menu={menu}/>
  ));
  return <div>{reviewList}</div>;
}

export default ReviewList;
