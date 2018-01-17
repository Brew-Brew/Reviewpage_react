import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import React, { Component } from 'react';
import { Switch, Route, withRouter,Link,Redirect } from 'react-router-dom';

import ReviewTemplate from './components/ReviewTemplate';
import ReviewList from './components/ReviewList';
import ReviewHeader from './components/ReviewHeader';
import routes from './routes';
import Loading from './components/Loading'

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
  componentWillMount(){
      this.props.fetchMenus(this.props.match.params.menuType);
      this.props.fetchReviews(this.props.match.params.menuId);
  }


  handleType(menuType) {
    //const linkTo = `/${menuType}/${this.props.match.params.menuId}`;
    //return <Redirect to="/"/>
    this.props.fetchMenus(menuType);
  }

  handleChange(menuId) {
    this.state.menuName = menuId.shortName;
    // this.props.fetchPosts(menuId.target.value);
    this.props.fetchReviews(menuId.target.value); // 음식에 맞는 리뷰 가져옴
  }

  render() {
    //this.props.fetchReviews(this.props.match.params.menuId);
    const { reviews, loading,menuNames, Type, dispatch, reviewPage, end } = this.props;
    const { menuType, menuId, menuName } = this.state;
    const { handleType, handleChange } = this;
    const linkTo = `/menus/${this.props.match.params.menuId}`;

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
          <ReviewList reviews={reviews}/>

          { (!loading && (reviews[0]!==undefined)) &&
          ( end || <button
              className="next-button"
              onClick={() => this.props.fetchNextReviewPage()}
            >다음 리뷰 보기
          </button>) }

            {loading&&(reviews[0]!==undefined) && <Loading/ >}
            {end && '더 이상 리뷰가 존재하지 않습니다!'}


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
    reviewPage: state.meta.reviewPage,
    end: state.reviewData.isEnd,
  };
}

export default withRouter(connect(select, {
  // dispatch: dispatch,
  receiveReviews,
  selectReviews,
  fetchMenus,
  fetchReviews,
  fetchNextReviewPage,
  requestReviews,
})(App));
