import React, { useState } from "react";
import Block from "../Block/Block";
import style from "./Faq.module.scss";
const Faq = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={style.faq}>
      <div className="subtitle">Почему выбирают нас?</div>
      <div className="title">FAQ</div>

      <Block num={1} active={active} setActive={setActive} />
      <Block num={2} active={active} setActive={setActive} />
      <Block num={3} active={active} setActive={setActive} />
      <Block num={4} active={active} setActive={setActive} />
      <Block num={5} active={active} setActive={setActive} />
      <Block num={6} active={active} setActive={setActive} />
    </div>
  );
};
export default Faq;
