import React, { useEffect, useState } from "react";
import { getNews } from "../../store/data";
import style from "./News.module.scss";
import photo from "../../img/photo.jpg";
const News = () => {
  const [news, setNews] = useState([]);
  const [on, setOn] = useState(true);

  useEffect(() => {
    setNews(getNews().newss);
  }, []);

  return (
    <div className={style.news}>
      <div className="subtitle">Почему выбирают нас?</div>
      <div className="title">Новости</div>
      {news.map((el) => {
        return <One one={el} key={el.id} />;
      })}
      {on && (
        <button
          className={style.news__button}
          onClick={() => {
            const { next, newss } = getNews();
            setNews((n) => [...n, ...newss]);
            setOn(next);
          }}
        >
          Показать еще
        </button>
      )}
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
