import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Corusel.module.scss";

export default function CoruselB({ imgs }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {imgs.map((img) => {
        return (
          <Carousel.Item key={img}>
            <img
              className="d-block w-100"
              src={img}
              alt=""
              className={style.img}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
