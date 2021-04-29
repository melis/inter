import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { setOrder } from "../../store/ordered/orderActions";
import style from "./Order.module.scss";
import close from "../../img/close.svg";

const Order = ({ history }) => {
  let ordered = useSelector(({ orderReduser }) => orderReduser);
  const [phone, setPhone] = useState("+7 (000) 000 00 00");

  let dispatch = useDispatch();
  if (!ordered) {
    return <Redirect to="/" />;
  }
  const { time } = ordered;

  return (
    <div className={style.order}>
      <div className={style.order__title}>
        Ваша заявка{" "}
        <img
          src={close}
          onClick={() => {
            history.push("/");
          }}
        />
      </div>
      <div className={style.order__block}>
        <div className={style.order__name}>
          <div>{ordered.name}</div>
          <div className={style.order__size}>Размер: {ordered.size}</div>
        </div>
        <div>{ordered.price * time} р</div>
      </div>
      <select
        style={{ borderRadius: "3px" }}
        value={time}
        onChange={(a) => {
          dispatch(setOrder({ ...ordered, time: a.target.value }));
        }}
      >
        <option value={1}>1 час</option>
        <option value={2}>2 часа</option>
        <option value={3}>3 часа</option>
        <option value={5}>5 часа</option>
        <option value={10}>2 дня</option>
        <option value={15}>3 дня</option>
      </select>
      {ordered.options.length > 0 ? (
        <div className={style.order__ops}>
          {ordered.options.map((el) => (
            <div key={el.id} className={style.order__block}>
              <div>{el.name}</div>
              <div>{el.price * time} р</div>
            </div>
          ))}
        </div>
      ) : null}
      <div className={style.order__block}>
        <div>Итого:</div>
        <div>
          {(ordered.price +
            ordered.options.reduce((t, el) => t + el.price, 0)) *
            time}{" "}
          р
        </div>
      </div>
      <form
        className={style.order__form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ ordered, phone });
          alert("Ваша заявка отправлено");
        }}
      >
        <input
          type="tel"
          className={style.order__phone}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Отправить заявку"
          className={style.order__button}
        />
      </form>
    </div>
  );
};
export default withRouter(Order);
