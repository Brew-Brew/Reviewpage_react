import React from 'react';
import './ReviewHeader.css';


const ReviewHeader = ({menuName,menuType, menuNames,menuId, onClick, handleChange}) => {

  // console.log('test'+menuId);
  // {menuNames}.forEach((menus)=>{
  //   <option value= {menus.menu}>{menus.menu}</option>
  // })

  return (
    <div className="menu">
      <button className="menu-button" onClick={() => onClick('MAIN')}>MAIN</button>
      <button className="menu-button" onClick={() => onClick('SIDE')}>SIDE</button>
      <button className="menu-button" onClick={() => onClick('DRINK')}>DRINK</button>
      <br/>

      <h3>{menuType}타입의 리뷰입니다.</h3>
      <select className="menu-detail" onChange={handleChange}>
        {menuNames.map((menuId)=>{
          //console.log('test'+menuId.id);
          return <option value={menuId.id}>{menuId.shortName}</option>;
        })}
      </select>
      <h3>{menuName}</h3>
    </div>


  );
};

export default ReviewHeader;
