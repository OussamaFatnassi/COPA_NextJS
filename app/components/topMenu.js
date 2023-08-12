import React from "react";
import "./TopMenu.css";

function TopMenu(props) {
  return (
    <div className="top-menu">
      <div className="menu-button" onClick={props.onMenuClick}></div>
      <img
        src={props.centerIconSrc}
        alt="center icon"
        className="center-icon"
      />
      <div className="avatar-slot"></div>
    </div>
  );
}

export default TopMenu;
