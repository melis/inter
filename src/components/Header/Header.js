import React from "react";
import style from "./Header.module.scss";
import logo from "../../img/logo.svg";

const Header = () => {
  return (
    <div className={style.header}>
      <img src={logo} alt="" />
    </div>
  );
};
export default Header;
