import React, { Component } from 'react';
import ReviewTemplate from './components/ReviewTemplate';
import ReviewList from './components/ReviewList';
import ReviewHeader from './components/ReviewHeader';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';

import { selectMenu,receiveReviews, selectReviews} from './actions';


const menuTypes = ['MAIN', 'DRINK', 'SIDE'];


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          menuType: '',
          menuDetail: ''};
  }

  componentDidMount() {
  const { reviews } = this.props;
}

  handleType = (menuType) => {
    this.props.selectMenu(menuType);
    this.props.receiveReviews(menuType);
  }

  handleChange = (menuDetail) => {

    this.props.selectReviews(menuDetail.target.value);
  }

  render() {
    console.log(this.props);
    const {
      reviews,menuNames,Type,dispatch
    } = this.props;
    const { menuType, menuDetail} = this.state;
    const {
      handleType,
      handleChange
    } = this;

    return (
      <ReviewTemplate header={
          <ReviewHeader
            menuNames={menuNames}
            menuDetail={menuDetail}
            menuTypes={menuTypes}
            menuType={Type}
            onClick={handleType}
            handleChange={handleChange}/>}
      >
        <ReviewList reviews={reviews}/>
      </ReviewTemplate>
    );
  }
}
function select(state){
    return {
        reviews: state.detailData,
        menuNames: state.menuNames,
        Type: state.menuType
    };
}
const mapDispatchToProps = (dispatch) => {
  return {
    selectMenu: menuType => dispatch(selectMenu(menuType)),
    receiveReviews: menuType => dispatch(receiveReviews(menuType)),
    selectReviews: menuDetail => dispatch(selectReviews(menuDetail))
  };
}
export default connect(select,mapDispatchToProps)(App);
