import React from 'react';
import { menuTypes } from '../const';
import './ReviewHeader.css';

const ReviewHeader = ({
  menuName,
  menuType,
  menuNames,
  menuId,
  onClick,
  handleChange,
}) => {
  // console.log('test'+menuId);
  // {menuNames}.forEach((menus)=>{
  //   <option value= {menus.menu}>{menus.menu}</option>
  // })
  const loading = false;

  return (
    <div className="menu">
      {menuTypes.map(type => (
        <button className="menu-button" onClick={() => onClick(type)}>
          {type}
        </button>
      ))}

      <br />
      <h3>{menuType}타입의 리뷰입니다.</h3>
      <select
        className="menu-detail"
        onChange={handleChange}
        disabled={loading}
      >
        {menuNames.map(menu => (
          // console.log('test'+menuId.id);
          <option value={menu.id}>{menu.shortName}</option>
        ))}
      </select>
      <h3>{menuName}</h3>
    </div>
  );
};

export default ReviewHeader;
