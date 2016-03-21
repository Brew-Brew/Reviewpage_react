'use strict';
import React from 'react';
import moment from 'moment';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import MenuNameDictionary from './menuNameDictionary';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '--메뉴선택--'
        };
    }

    _onSelect(event, eventKey) {
        this.setState({
            title: MenuNameDictionary[eventKey]
        });
        this.props.selectMenu(eventKey);
    }

    render() {
        let selectMenuRow = [];
        for(var i in MenuNameDictionary) {
            selectMenuRow.push(<MenuItem key={i} eventKey={i}>{MenuNameDictionary[i]}</MenuItem>);
        }
        return (
            <DropdownButton title={this.state.title} id="dropdown-size-medium" onSelect={this._onSelect.bind(this)}>
                {selectMenuRow}
            </DropdownButton>
        );
    }
}