import React from 'react';
import './Loading.css';
class Loading extends React.Component {
    render(){
      return(
         <div class="ld_line">
            <div class="lft"></div>
            <div class="cont"><img src="http://static.naver.com/desk/ico_ld_cm.gif" width="17" height="17" alt=""/> 로딩 중입니다.</div>
            <div class="rgt"></div>
          </div>
      )
   }
}

export default Loading;
