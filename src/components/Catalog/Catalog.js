import React from "react";
import { useSelector } from "react-redux";
import PhotoBooth from "../PhotoBooth/PhotoBooth";
import style from "./Catalog.module.scss";
const Catalog = () => {
  const photoBooths = useSelector(({ booths }) => booths);

  const list = photoBooths.map((el) => {
    return <PhotoBooth booth={el} key={el.id} />;
  });
  return (
    <div className={style.catalog}>
      <h1>Фотобудки</h1>
      {list}
    </div>
  );
};

export default Catalog;

// id: 0
// img: (5) ["https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jS-ej8cLNkOopCf8W5f2JDxXqpidA58tV8nMu-Jg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jS-ej8cLNkOopCf8W5f2JDxXqpidA58tV8nMu-Jg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jS-ej8cLNkOopCf8W5f2JDxXqpidA58tV8nMu-Jg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jS-ej8cLNkOopCf8W5f2JDxXqpidA58tV8nMu-Jg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…jS-ej8cLNkOopCf8W5f2JDxXqpidA58tV8nMu-Jg&usqp=CAU"]
// name: "Фотобудка с ширмой 0"
// options: [Array(10)]
// price: 15000
// size: "2м x 1.5м x 2 м"
