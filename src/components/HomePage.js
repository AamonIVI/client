import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css';
import axios from 'axios';


const HomePage = () => {
  const navigate = useNavigate();

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(`https://vet-consult.ru/api/news`)
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the news!", error);
      });
  }, []);
  


  return (
    <main className="home-page">
      <div className="buttons">
        <button className='button1' onClick={() => navigate('/category/НПА РФ')}>НПА РФ</button>
        <button className='button2' onClick={() => navigate('/category/НПА субъектов РФ')}>НПА субъектов РФ</button>
        <button className='button3' onClick={() => navigate('/category/Продуктивные животные')}>Продуктивные животные</button>
        <button className='button4' onClick={() => navigate('/category/Непродуктивные животные')}>Непродуктивные животные</button>
        <button className='button5' onClick={() => navigate('/category/Лаборатории')}>Лаборатории</button>
        <button className='button6' onClick={() => navigate('/category/Корма')}>Корма</button>
        <button className='button7' onClick={() => navigate('/category/ОВД')}>ОВД</button>
        <button className='button8' onClick={() => navigate('/category/ГосВетНадзор')}>ГосВетНадзор</button>
      </div>
      <div className="news">
        <h2>Новости</h2>
        <ul>
        {news.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <small>{item.date}</small>
          </li>
        ))}
        </ul>
      </div>
      <div className="document-counter">
         На сайте документов: 
         NaN
      </div>
      <div className="buy-access"> Купить cистему  Подборки/обзоры</div>
    </main>
  );
};

export default HomePage;
