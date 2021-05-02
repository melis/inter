import React, { useState } from "react";
import style from "./Block.module.scss";

const Block = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={style.block}>
      <div
        className={`${style.block__title} ${
          active && style.block__title__active
        }`}
        onClick={() => {
          setActive(!active);
        }}
      >
        Какой реквизит идет в комплекте?
        <span
          className={`${style.block__bt} ${active && style.block__bt__active}`}
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
