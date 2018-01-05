import React from 'react';
import './ReviewHeader.css';


const ReviewHeader = ({menuType, menuNames,menuDetail, onClick, handleChange}) => {

  // console.log(menus);
  // {menuNames}.forEach((menus)=>{
  //   <option value= {menus.menu}>{menus.menu}</option>
  // })

  return (
    <div className="menu">
      <button className="menu-button" onClick={() => onClick('main')}>MAIN</button>
      <button className="menu-button" onClick={() => onClick('side')}>SIDE</button>
      <button className="menu-button" onClick={() => onClick('drink')}>DRINK</button>
      <br/>

      <h3>{menuType}타입의 리뷰입니다.</h3>
      <select className="menu-detail" onChange={handleChange}>
        {menuNames.filter((menu)=>{
          return menu.menuType === menuType;
        }).map((menu)=>{
          return <option value={menu.menu}>{menu.menu}</option>;
        })}
      </select>
      <h3>{menuDetail}</h3>
    </div>


  );
};

export default ReviewHeader;
