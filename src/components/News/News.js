import React, { useEffect, useState } from "react";
import { getNews } from "../../store/data";
import style from "./News.module.scss";
import photo from "../../img/photo.jpg";
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
  return (
    <div className={style.one}>
      <img alt="" src={photo} />
      <div className={style.one__box}>
        <div className={style.one__subtitle}>Услуги</div>
        <div className={style.one__title}>{one.title}</div>
        <div className={style.one__body}>{one.body}</div>
        <div className={style.one__data}>{one.data}</div>
      </div>
    </div>
  );
}
