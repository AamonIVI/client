import React from 'react';
import './styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="contacts">
      117292, Москва, ул. Кржижановского, 6 (центральный офис)
    </div>
    <div className="phone-numbers">
      +7 <br />
      +7
    </div>
    <div className="social-media">
      <a href="vk.ru">ВКонтакте</a>
      <a href="yandex.ru">Дзен</a>
      <a href="telegram.ru">Telegram</a>
      <a href="ok.ru">Одноклассники</a>
    </div>
  </footer>
);

export default Footer;
