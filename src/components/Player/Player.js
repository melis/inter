import React from "react";
import ReactPlayer from "react-player";
import style from "./Player.module.scss";
import elips from "../../img/player/Ellipse60.svg";
import pounds from "../../img/player/pounds.svg";

const Palayer = () => {
  return (
    <div className={style.player}>
      <img className={style.elips} src={elips} alt="" />
      <img className={style.pounds} src={pounds} alt="" />
      <ReactPlayer
        width="315px"
        height="188px"
        light
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
    </div>
  );
};
export default Palayer;
