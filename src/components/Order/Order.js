import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  let ordered = useSelector(({ orderReduser }) => orderReduser.order);
  if (!ordered) return <>Пусто</>;
  return (
    <>
      <div>
        <div>{ordered.name}</div>
        <div>{ordered.price}</div>
      </div>
      <div>
        {ordered.options.map((el) => (
          <div key={el.id}>
            <div>{el.name}</div>
            <div>{el.price}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Order;
