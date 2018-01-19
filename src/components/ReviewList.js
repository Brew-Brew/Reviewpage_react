import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import ReviewItem from './ReviewItem';


function ReviewList(props) {
  const { reviews, redirect } = props;
  const reviewList = reviews.map(({ comment, rating, ratedTime, menu}) => (
    <ReviewItem comment={comment} rating={rating} ratedTime={ratedTime} menu={menu}/>
  ));

    return <div>{reviewList}</div>
}

export default ReviewList;
