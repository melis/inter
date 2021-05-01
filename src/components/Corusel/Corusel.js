import React, { useState, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Corusel.module.scss";
// import Carousel from "react-bootstrap/Carousel";
const Carousel = React.lazy(() => import("react-bootstrap/Carousel"));

export default function CaruselB({ imgs }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imgs.map((img) => {
          return (
            <Carousel.Item key={img}>
              <img src={img} alt="" className={style.img} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Suspense>
  );
}
