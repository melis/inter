import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Fillter from "../Fillter/Fillter";
import PhotoBooth from "../PhotoBooth/PhotoBooth";
import style from "./Catalog.module.scss";
const Catalog = () => {
  const photoBooths = useSelector(({ boothReduser }) => boothReduser.booths);
  const [bArr, setBArr] = useState([...photoBooths]);

  const [fillter, setFillter] = useState("");

  useEffect(() => {
    let newArr = [...photoBooths];
    switch (fillter) {
      case "PRICEDOWN":
        newArr.sort((a, b) => b.price - a.price);
        setBArr(newArr);
        break;
      case "PRICEUP":
        newArr.sort((a, b) => a.price - b.price);
        setBArr(newArr);
        break;
      default:
        setBArr(photoBooths);
    }
  }, [fillter, photoBooths]);

  return (
    <div className={style.catalog}>
      <h1>Фотобудки</h1>
      <Fillter setFillter={setFillter} />
      {bArr.map((el) => {
        return <PhotoBooth booth={el} key={el.id} />;
      })}
    </div>
  );
};

export default Catalog;
