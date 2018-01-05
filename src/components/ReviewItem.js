import React, { Component } from 'react';
import './ReviewItem.css';

class ReviewItem extends Component {
  render() {
    const { menu,score,reviewTime,orderTime,review } = this.props;

    return (
      <div className="review-item" >
          <div> 메뉴:{menu} 점수: {score} 리뷰시간: {reviewTime} 주문시간: {orderTime}</div>
          <div>리뷰: {review}</div>
      </div>
    );
  }
}

export default ReviewItem;
