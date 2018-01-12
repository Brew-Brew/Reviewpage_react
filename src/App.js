import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import React, { Component } from 'react';
import ReviewTemplate from './components/ReviewTemplate';
import ReviewList from './components/ReviewList';
import ReviewHeader from './components/ReviewHeader';

import {
  receiveReviews,
  selectReviews,
  fetchMenus,
  fetchReviews,
  fetchNextReviewPage,
  requestReviews,
} from './redux/action';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuName: '',
      menuType: '',
      menuId: '',
    };

    this.handleType = this.handleType.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleType(menuType) {

    this.props.fetchMenus(menuType);
    // this.props.receiveReviews(menuType);//그 타입에 맞는 리뷰들 받아옴
  }

  handleChange(menuId) {
    this.state.menuName = menuId.shortName;
    // this.props.fetchPosts(menuId.target.value);
    this.props.fetchReviews(menuId.target.value); // 음식에 맞는 리뷰 가져옴
  }

  render() {
    const { reviews, loading,menuNames, Type, dispatch } = this.props;
    const { menuType, menuId, menuName } = this.state;
    const { handleType, handleChange } = this;

    return (
      <ReviewTemplate
        header={
          <ReviewHeader
            loading={loading}
            menuName={menuName}
            menuNames={menuNames}
            menuId={menuId}
            menuType={Type}
            onClick={handleType}
            handleChange={handleChange}
          />
        }
      >
        <ReviewList reviews={reviews} />
        <button
          className="next-button"
          onClick={() => this.props.fetchNextReviewPage()}
        >
          다음 리뷰 보기
        </button>
      </ReviewTemplate>
    );
  }
}

function select(state) {
  return {
    loading: state.reviewData.isFetching,
    reviews: state.reviewData.reviews,
    menuNames: state.menu.menuNames,
    Type: state.menu.menuType,
  };
}

export default connect(select, {
  // dispatch: dispatch,
  receiveReviews,
  selectReviews,
  fetchMenus,
  fetchReviews,
  fetchNextReviewPage,
  requestReviews,
})(App);
