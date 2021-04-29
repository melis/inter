import React from "react";
import style from "./RentTime.module.scss";

const RentTime = ({ setTime, time }) => {
  return (
    <div className={style.rentTime}>
      <div className={style.rentTime__title}>Укажите время аренды</div>
      <div className={style.rentTime__box}>
        <ul className={style.time}>
          <li
            className={`${style.time__item} ${
              time === 1 && style.time__item__active
            }`}
            onClick={() => {
              setTime(1);
            }}
          >
            1 час
          </li>
          <li
            className={`${style.time__item} ${
              time === 2 && style.time__item__active
            }`}
            onClick={() => {
              setTime(2);
            }}
          >
            2 часа
          </li>
          <li
            className={`${style.time__item} ${
              time === 3 && style.time__item__active
            }`}
            onClick={() => {
              setTime(3);
            }}
          >
            3 часа
          </li>
          <li
            className={`${style.time__item} ${
              time === 5 && style.time__item__active
            }`}
            onClick={() => {
              setTime(5);
            }}
          >
            5 часа
          </li>
        </ul>
        <ul className={style.time}>
          <li
            className={`${style.time__item} ${
              time === 10 && style.time__item__active
            }`}
            onClick={() => {
              setTime(10);
            }}
          >
            выставка 2 дня{" "}
          </li>
          <li
            className={`${style.time__item} ${
              time === 15 && style.time__item__active
            }`}
            onClick={() => {
              setTime(15);
            }}
          >
            выставка 3 дня{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RentTime;
