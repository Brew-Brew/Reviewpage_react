
import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router'

import ReviewTemplate from './components/ReviewTemplate';
import ReviewList from './components/ReviewList';
import ReviewSelecter from './components/ReviewSelecter';
import Loading from './components/Loading'

import {
  receiveReviews,
  loadMenus,
  loadReviews,
  loadNextReviews,
  loadReviewsRequest,
} from './redux/action';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };

    this.handleType = this.handleType.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
      this.props.loadReviews(this.props.match.params.menuId, this.props.menuType);
  }


  handleType(menuType) {
    this.setState({redirect: null}) ;
    this.props.loadMenus(menuType);
  }

  handleChange(menuId) {
    const address= "/" + menuId.target.value.toString();
    this.props.history.push(address);
    this.props.loadReviews(menuId.target.value, this.props.menuType); // 음식에 맞는 리뷰 가져옴
  }

  render() {
    const { reviews, loading, menuNames, menuType, end, menuId, } = this.props;
    const { handleType, handleChange } = this;

    return (

        <ReviewTemplate
          header={
            <ReviewSelecter
              menuLoading={loading}
              menuNames={menuNames}
              menuId={menuId}
              menuType={menuType}
              onMenuTypeClick={handleType}
              onMenuChange={handleChange}
              selectedMenu={menuId}
            />
          }
        >

          <ReviewList reviews={reviews} />

          {(!loading && (reviews[0]!==undefined)) &&
          (end || <button
              className="next-button"
              onClick={() => this.props.loadNextReviews(this.props.menuId, this.props.menuType)}
            >다음 리뷰 보기
          </button>) }

            {loading &&(reviews[0]!==undefined) && <Loading/ >}
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
    menuType: state.menu.menuType,
    reviewPage: state.meta.reviewPage,
    end: state.reviewData.isEnd,
    menuId: state.menu.menuId,
  };
}

export default withRouter(connect(select, {
  receiveReviews,
  loadMenus,
  loadReviews,
  loadReviewsRequest,
  loadNextReviews,

})(App));
