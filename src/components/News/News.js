import React, { useEffect, useState } from "react";
import { getNews } from "../../store/data";
import style from "./News.module.scss";
const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(getNews());
  }, []);
  console.log(news);
  return (
    <div className={style.news}>
      <div className="subtitle">Почему выбирают нас?</div>
      <div className="title">Новости</div>
      {news.map((el) => {
        return <One one={el} />;
      })}
      <button
        className={style.news__button}
        onClick={() => {
          setNews((n) => [...n, ...getNews()]);
        }}
      >
        Показать еще
      </button>
    </div>
  );
};
export default News;

function One({ one }) {
  return <div>{one.title}</div>;
}
