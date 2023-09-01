'use client';
import React from "react";
import "./style.css";

export const TopMenu = () => {
  return (
    <div className="box">
      <div className="group">
        <img className="logo-eco-walking" alt="Logo eco walking" src="/img/logo-eco-walking-noir.png" />
        <div className="photo-de-profil" />
        {/* burger svg */}
        <div className="burgerMenu">
        <img className="vector" alt="Burger" src="/img/burger.svg" />
        </div>
      </div>
    </div>
  );
};