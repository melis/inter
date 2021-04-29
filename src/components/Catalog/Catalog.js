import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Fillter from "../Fillter/Fillter";
import PhotoBooth from "../PhotoBooth/PhotoBooth";
import style from "./Catalog.module.scss";
const Catalog = () => {
  const photoBooths = useSelector(({ boothReduser }) => boothReduser.booths);
  const [bArr, setBArr] = useState([...photoBooths]);
  const [fillter, setFillter] = useState("DEFAULT");
  useEffect(() => {
    let newArr = [];
    switch (fillter) {
      case "PRICEDOWN":
        newArr = [...bArr];
        newArr.sort((a, b) => b.price - a.price);
        setBArr(newArr);
        break;
      case "PRICEUP":
        newArr = [...bArr];
        newArr.sort((a, b) => a.price - b.price);
        setBArr(newArr);
        break;
      case "DEFAULT":
        setBArr(photoBooths);
        break;
      default:
        setBArr(photoBooths);
    }
  }, [fillter]);

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
