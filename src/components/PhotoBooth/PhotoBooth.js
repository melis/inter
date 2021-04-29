import React, { useEffect, useState } from "react";
import CoruselB from "../Corusel/Corusel";
import Options from "../Options/Options";
import style from "./PhotoBooth.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOrder } from "../../store/ordered/orderActions";

const PhotoBooth = ({ booth }) => {
  const [onOptions, setOnOptions] = useState([]);
  const dispatch = useDispatch();

  return (
    <div className={style.booth}>
      <CoruselB imgs={booth.img} />
      <div className={style.booth__name}>{booth.name}</div>
      <div className={style.booth__size}>
        Размер: <span>{booth.size}</span>
      </div>
      <Options options={booth.options} setOnOptions={setOnOptions} />
      <div className={style.booth__price}>
        <div>
          {booth.price + onOptions.reduce((t, el) => t + el.price, 0)} р
        </div>
        <Link
          to="/order"
          onClick={() => {
            let order = { ...booth };
            order.options = onOptions;
            dispatch(setOrder({ order }));
          }}
        >
          <button className={style.booth__button}>Оставит заявку</button>
        </Link>
      </div>
    </div>
  );
};
export default PhotoBooth;
