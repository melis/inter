import React from "react";
import Block from "../Block/Block";
import style from "./Faq.module.scss";
const Faq = () => {
  return (
    <div className={style.faq}>
      <div className="subtitle">Почему выбирают нас?</div>
      <div className="title">FAQ</div>
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </div>
  );
};
export default Faq;
