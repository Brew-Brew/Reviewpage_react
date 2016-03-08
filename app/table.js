'use strict';
import React from 'react';
import Row from './row';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rows = [];
        if (this.props.rowData) {
            this.props.rowData.forEach((singleRowData, index) => {
                rows.push(<Row key={index} data={singleRowData} />);
                rows.push(<div className="padding" />);
            });
        }
        return (
            <div>
                {rows}
            </div>
        );
    }
}
Table.propTypes = {
    rowData: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            order_idx: React.PropTypes.number,
            menu_idx: React.PropTypes.number,
            rating: React.PropTypes.number,
            comment: React.PropTypes.string,
            rated_time: React.PropTypes.string
        })
    )
};