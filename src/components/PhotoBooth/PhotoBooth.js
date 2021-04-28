import React from "react";
import CoruselB from "../Corusel/Corusel";
import Options from "../Options/Options";
import style from "./PhotoBooth.module.scss";

const PhotoBooth = ({ booth }) => {
  return (
    <div className={style.booth}>
      <CoruselB imgs={booth.img} />
      <div className={style.booth__name}>{booth.name}</div>
      <div className={style.booth__size}>
        Размер: <span>{booth.size}</span>
      </div>
      <Options />
      <div>{booth.price} р</div>
    </div>
  );
};
export default PhotoBooth;
