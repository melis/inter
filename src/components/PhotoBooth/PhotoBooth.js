import React, { useState } from "react";
import Options from "../Options/Options";
import style from "./PhotoBooth.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOrder } from "../../store/ordered/orderActions";
import RentTime from "../RentTime/RentTime";
import CaruselB from "../Corusel/Corusel";
import "bootstrap/dist/css/bootstrap.min.css";
// const CaruselB = React.lazy(() => import("../Corusel/Corusel"));

const PhotoBooth = ({ booth }) => {
  const [onOptions, setOnOptions] = useState([]);
  const [time, setTime] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className={style.booth}>
      {/* <Suspense fallback={<div>Загрузка...</div>}> */}
      <CaruselB imgs={booth.img} />
      {/* </Suspense> */}
      <div className={style.booth__name}>{booth.name}</div>
      <div className={style.booth__size}>
        Размер: <span>{booth.size}</span>
      </div>
      <Options options={booth.options} setOnOptions={setOnOptions} />
      <RentTime setTime={setTime} time={time} />
      <div className={style.booth__price}>
        <div>
          {(booth.price + onOptions.reduce((t, el) => t + el.price, 0)) * time}{" "}
          р
        </div>
        <Link
          to="/order"
          onClick={() => {
            let order = { ...booth };
            order.options = onOptions;
            order.time = time;
            dispatch(setOrder(order));
          }}
        >
          <button className={style.booth__button}>Оставит заявку</button>
        </Link>
      </div>
    </div>
  );
};
export default PhotoBooth;
