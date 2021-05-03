import React from "react";
import style from "./Block.module.scss";

const Block = ({ num, active, setActive }) => {
  return (
    <div className={style.block}>
      <div
        className={`${style.block__title} ${
          active === num && style.block__title__active
        }`}
        onClick={() => {
          if (active === num) {
            setActive(0);
          } else {
            setActive(num);
          }
        }}
      >
        Какой реквизит идет в комплекте?
        <span
          className={`${style.block__bt} ${
            active === num && style.block__bt__active
          }`}
        ></span>
      </div>
      <div className={style.block__textOut}>
        <div className={style.block__text}>
          Какой то текст для заголовка Какой то текст для заго Какой то текст
          для заголовка Какой то текст для загоКакой то текст для заголовка
          Какой то текст для заго Какой то текст для заголовка Какой то текст
          для загоКакой то текст для заголовка Какой то текст для заго
        </div>
      </div>
    </div>
  );
};
export default Block;
