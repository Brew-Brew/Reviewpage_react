import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import moment from 'moment';

import ReviewItem from './ReviewItem';

function ReviewList(props) {
  const { reviews, redirect } = props;
  const reviewList = reviews.map(({ comment, rating, ratedTime, menu}) => (

    <ReviewItem comment={comment} rating={rating} ratedTime={moment(new Date(ratedTime)).format('YYYY년 MM월 DD일 HH:mm')} menu={menu}/>
  ));

    return <div>{reviewList}</div>
}

export default ReviewList;
