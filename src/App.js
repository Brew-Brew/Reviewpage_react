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
      redirect: null,
    };

    this.handleType = this.handleType.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
      this.props.fetchReviews(this.props.match.params.menuId);
  }


  handleType(menuType) {
    this.setState({redirect: null}) ;
    this.props.fetchMenus(menuType);
  }

  handleChange(menuId) {
    const address= "/" + menuId.target.value.toString();
  //  this.setState({redirect: address}) ;
    this.props.history.push(address);
    this.props.fetchReviews(menuId.target.value); // 음식에 맞는 리뷰 가져옴
  }

  render() {
    const { reviews, loading, menuNames, Type, dispatch, reviewPage, end, menuId, } = this.props;
    const { menuType,  menuName, redirect } = this.state;
    const { handleType, handleChange } = this;

    // if (redirect) {
    //    return <Redirect to={redirect}/>;
    //  }

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
              selectedMenu={menuId}
            />
          }
        >

          <ReviewList reviews={reviews} redirect={redirect}/>

          { (!loading && (reviews[0]!==undefined)) &&
          ( end || <button
              className="next-button"
              onClick={() => this.props.fetchNextReviewPage(this.props.menuId, this.props.Type)}
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
    menuId: state.menu.menuId,
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
