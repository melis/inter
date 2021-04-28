import React from "react";
import style from "./Options.module.scss";
const Options = ({ options }) => {
  return (
    <div className={style.options}>
      <span>Доп.опции</span>
      <div className={style.options__list}>
        {options.map((op) => {
          return (
            <div className={style.options__item} key={op.id}>
              <img src={op.img} alt="" />
              <div className={style.options__info}>
                <div>{op.name}</div>
                <div>От {op.price} р</div>
                <input type="checkbox" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Options;
