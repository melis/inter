import React from "react";
import style from "./Fillter.module.scss";
const Fillter = ({ setFillter }) => {
  return (
    <div className={style.fillter}>
      <div className={style.fillter__title}>Сортировка:</div>
      <select
        className={style.fillter__select}
        onChange={(a) => {
          setFillter(a.target.value);
        }}
      >
        <option className={style.fillter__item} value="DEFAULT">
          По умолчанию
        </option>

        <option className={style.fillter__item} value="PRICEUP">
          По цене (воз.)
        </option>
        <option className={style.fillter__item} value="PRICEDOWN">
          По цене (убывание)
        </option>
      </select>
    </div>
  );
};

export default Fillter;
