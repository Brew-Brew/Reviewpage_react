import React from 'react';
import { Link } from 'react-router-dom';

import { menuTypes } from '../const';
import './ReviewHeader.css';
import Loading from './Loading'
import Modal from './modal/index'


const ReviewHeader = ({
  loading,
  menuType,
  menuNames,
  onClick,
  handleChange,
  selectedMenu,
}) => {
  return (

    <div className="menu">
      {menuTypes.map(type => (
        <button className="menu-button" onClick={() => onClick(type)}>
          {type}
        </button>
      ))}

      <br />

      <h3>{menuType}타입의 리뷰입니다.</h3>
        <select class="styled-select"
          onChange={handleChange}
          disabled={loading}
          value={selectedMenu}
        >
            <option value="" >Please Select</option>
            {menuNames.map(menu => (
              // console.log('test'+menuId.id);
              <option value={menu.id}> {menu.shortName}</option>
            ))}
        </select>

    {loading &&  <Loading/> }
    </div>
  );
};

export default ReviewHeader;
