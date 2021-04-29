import React from "react";
import { useSelector } from "react-redux";
import PhotoBooth from "../PhotoBooth/PhotoBooth";
import style from "./Catalog.module.scss";
const Catalog = () => {
  const photoBooths = useSelector(({ boothReduser }) => boothReduser.booths);

  return (
    <div className={style.catalog}>
      <h1>Фотобудки</h1>
      {photoBooths.map((el) => {
        return <PhotoBooth booth={el} key={el.id} />;
      })}
    </div>
  );
};

export default Catalog;
