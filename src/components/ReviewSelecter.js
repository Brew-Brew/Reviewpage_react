import React from 'react';

import { menuTypes } from '../const';
import './ReviewSelecter.css';
import Loading from './Loading'


const ReviewSelecter = ({
  menuLoading,
  menuType,
  menuNames,
  onMenuTypeClick,
  onMenuChange,
  selectedMenu,
}) => {
  return (

    <div className="menu">
      {menuTypes.map(type => (
        <button className="menu-button" onClick={() => onMenuTypeClick(type)}>
          {type}
        </button>
      ))}

      <br />

      <h3>{menuType}타입의 리뷰입니다.</h3>
        <select class="styled-select"
          onChange={onMenuChange}
          disabled={menuLoading}
          value={selectedMenu}
        >
            <option value="" >Please Select</option>
            {menuNames.map(menu => (
              <option value={menu.id}> {menu.shortName}</option>
            ))}
        </select>

    {menuLoading &&  <Loading/> }
    </div>
  );
};

export default ReviewSelecter;
