'use strict';
import React from 'react';
import Moment from 'moment';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    menuName(menuIdx) {
        const MenuNameDictionary = {
            13: '연어',
            14: '까넬',
            18: '트러플',
            19: '수비드 닭',
            20: '매운갈비',
            21: '함박',
            22: '노리츠쿠',
            20003: '그라브락스',
            20004: '시즌샐러드'
        };
        return MenuNameDictionary[menuIdx];
    }

    render() {
        const data = this.props.data;
        const orderIndex = data.idx;
        const menuName = this.menuName(data.menuIdx);
        const rating = data.rating;
        const ratingTime = Moment(data.ratedTime).Add(9, 'h').format('M월D일HH시');
        const requestTime = Moment(data.requestTime).Add(9, 'h').format('M월D일HH시');
        const comment = data.comment;
        return (
            <div className="border">
                <div className="row">
                    <div className="col-xs-1 center"></div>
                    <div className="col-xs-3 center">메뉴</div>
                    <div className="col-xs-2 center">점수</div>
                    <div className="col-xs-3 center">리뷰시각</div>
                    <div className="col-xs-3 center">배달시각</div>
                
                    <div className="col-xs-1 center">{orderIndex}</div>
                    <div className="col-xs-3 center">{menuName}</div>
                    <div className="col-xs-2 center">{rating}점</div>
                    <div className="col-xs-3 center">{ratingTime}</div>
                    <div className="col-xs-3 center">{requestTime}</div>
                    
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