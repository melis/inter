import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./Corusel.module.scss";

export default function CaruselB({ imgs }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {imgs.map((img) => {
        return (
          <Carousel.Item key={img}>
            <img src={img} alt="" className={style.img} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
