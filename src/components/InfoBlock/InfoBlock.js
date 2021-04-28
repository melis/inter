import React from "react";
import style from "./InfoBlock.module.scss";
import img1 from "../../img/advantages/1.svg";
import img2 from "../../img/advantages/2.svg";
import img3 from "../../img/advantages/3.svg";
import img4 from "../../img/advantages/4.svg";

const InfoBlock = () => {
  return (
    <div className={style.InfoBlock}>
      <h1>
        <div className={style.title}>Фото на</div> праздник
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur <a href="/">adipiscing elit</a>,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={style.advantages}>
        <div className={style.advantages__item}>
          <img src={img1} alt="" />
          Безлимитная печат фото
        </div>
        <div className={style.advantages__item}>
          <img src={img2} alt="" />
          Фотореквизитв наличии
        </div>
        <div className={style.advantages__item}>
          <img src={img3} alt="" />
          Фотоотчет в электронном виде
        </div>
        <div className={style.advantages__item}>
          <img src={img4} alt="" />
          Цены ниже рынка
        </div>
      </div>
    </div>
  );
};
export default InfoBlock;
