'use strict';
import React from 'react';
import moment from 'moment';
import MenuNameDictionary from '../menuNameDictionary';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    menuName(menuIdx) {
        return MenuNameDictionary[menuIdx];
    }

    render() {
        const data = this.props.data;
        const orderIndex = data.idx;
        const menuName = this.menuName(data.menuIdx);
        const rating = data.rating;
        const ratingTime = moment(data.ratedTime).format('M월D일HH시');
        const requestTime = moment(data.requestTime).add(9, 'h').format('M월D일');
        const comment = data.comment;
        const name = data.name;
        const phoneNumber = data.phoneNumber;
        return (
            <div className="border">
                <div className="row">
                    <div className="col-xs-1 center"></div>
                    <div className="col-xs-3 center">메뉴</div>
                    <div className="col-xs-2 center">점수</div>
                    <div className="col-xs-3 center">리뷰시각</div>
                    <div className="col-xs-3 center">드신 날</div>

                    <div className="col-xs-1 center">{orderIndex}</div>
                    <div className="col-xs-3 center">{menuName}</div>
                    <div className="col-xs-2 center">{rating}점</div>
                    <div className="col-xs-3 center">{ratingTime}</div>
                    <div className="col-xs-3 center">{requestTime}</div>

                    <div className="col-xs-6 center">{name}</div>
                    <div className="col-xs-6 center">{phoneNumber}</div>

                </div>
                <div className="padding" />

                <div className="row">
                    <div className="col-xs-12">{comment}</div>
                </div>
            </div>
        );
    }
}
Row.propTypes = {
    data: React.PropTypes.shape({
        order_idx: React.PropTypes.number,
        menu_idx: React.PropTypes.number,
        rating: React.PropTypes.number,
        comment: React.PropTypes.string,
        rated_time: React.PropTypes.string
    })
};
