import React from "react";
import style from "./Options.module.scss";
const Options = ({ options, setOnOptions }) => {
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
                <input
                  type="checkbox"
                  onChange={(e) => {
                    console.log(e.target.checked, op.id);
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Options;
