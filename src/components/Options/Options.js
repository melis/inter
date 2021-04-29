import React from "react";
import style from "./Options.module.scss";
import check from "../../img/check.svg";
const Options = ({ options, setOnOptions }) => {
  return (
    <div className={style.options}>
      <span className={style.options__title}>Доп.опции</span>
      <div className={style.options__list}>
        {options.map((op) => {
          return (
            <label
              className={`${style.options__item} ${style.check}`}
              key={op.id}
            >
              <img src={op.img} alt="" />
              <div className={style.options__info}>
                <div>{op.name}</div>
                <div className={style.options__price}>+ {op.price} р</div>
                <input
                  className={style.check__inp}
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setOnOptions((arr) => {
                        return [...arr, op];
                      });
                    } else {
                      setOnOptions((arr) => {
                        return arr.filter((el) => el.id !== op.id);
                      });
                    }
                  }}
                />
                <span className={style.check__sp}>
                  <img
                    alt=""
                    src={check}
                    style={{
                      width: "15px",
                      height: "15px",
                      padding: "1px",
                      margin: 0,
                    }}
                  />
                </span>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};
export default Options;
