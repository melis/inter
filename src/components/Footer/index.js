import React from "react";
import style from "./Footer.module.scss";
import phone from "../../img/contact/phone.svg";
import label from "../../img/contact/label.svg";
import map from "../../img/map.jpg";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="subtitle">Мы всегда достпну для вас</div>
      <div className="title">Контакты</div>
      <div className={style.contact}>
        <div className={style.contact__item}>
          <div className={style.contact__logo}>
            <img alt="" src={phone} />
          </div>
          <div className={style.contact__inf}>
            <div className={style.contact__title}>Телефон</div>
            <div className={style.contact__body}>+7 495 123 45 67</div>
          </div>
        </div>
        <div className={style.contact__item}>
          <div className={style.contact__logo}>
            <img alt="" src={label} />
          </div>
          <div className={style.contact__inf}>
            <div className={style.contact__title}>Адрес</div>
            <div className={style.contact__body}>
              109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине
              только с улицы Люблинская
            </div>
          </div>
        </div>
        <div className={style.contact__item}>
          <div className={style.contact__logo}></div>
          <div className={style.contact__inf}>
            <div className={style.contact__title}>Почта</div>
            <div className={style.contact__body}>Info@test.ru</div>
          </div>
        </div>
      </div>
      <img className={style.footer__map} src={map} alt="map" />
    </div>
  );
};
export default Footer;
