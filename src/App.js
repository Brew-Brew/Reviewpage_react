import React, { Component } from 'react';
import ReviewTemplate from './components/ReviewTemplate';
import ReviewList from './components/ReviewList';
import ReviewHeader from './components/ReviewHeader';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';

import { selectMenu,receiveReviews, selectReviews,fetchMenus,fetchReviews,fetchNextReviewPage} from './actions';


const menuTypes = ['MAIN', 'DRINK', 'SIDE'];


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          menuType: '',
          menuId: ''};
  }

  componentDidMount() {

}

  handleType = (menuType) => {
    this.props.selectMenu(menuType);//버튼으로 눌러서 타입 선택
    this.props.fetchMenus(menuType);
    //this.props.receiveReviews(menuType);//그 타입에 맞는 리뷰들 받아옴
  }

  handleChange = (menuId) => {

    //this.props.fetchPosts(menuId.target.value);
    this.props.fetchReviews(menuId.target.value);//음식에 맞는 리뷰 가져옴
  }

  render() {

    const {
      reviews, menuNames, Type, dispatch
    } = this.props;
    const { menuType, menuId} = this.state;
    const {
      handleType,
      handleChange
    } = this;

    return (
      <ReviewTemplate header={
          <ReviewHeader
            menuNames={menuNames}
            menuId={menuId}
            menuTypes={menuTypes}
            menuType={Type}
            onClick={handleType}
            handleChange={handleChange}/>}
      >
        <ReviewList reviews={reviews}/>
        <button className="next-button" onClick={() => this.props.fetchNextReviewPage()}>다음 리뷰 보기</button>
      </ReviewTemplate>

    );
  }
}
function select(state){
    return {
        reviews: state.reviewData,
        menuNames: state.menuNames,
        Type: state.menuType
    };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch: dispatch,
    selectMenu: menuType => dispatch(selectMenu(menuType)),
    receiveReviews: menuType => dispatch(receiveReviews(menuType)),
    selectReviews: menuId => dispatch(selectReviews(menuId)),
    fetchMenus: menuType => dispatch(fetchMenus(menuType)),
    fetchReviews: menuId => dispatch(fetchReviews(menuId)),
    fetchNextReviewPage: () => dispatch(fetchNextReviewPage())
  };
}
export default connect(select,mapDispatchToProps)(App);
