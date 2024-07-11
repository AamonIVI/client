import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <div className='logo_pic'/>
        <span сlassName = 'span'>VETCONSULT</span>
      </div>
      <div className="search-bar">
        <button className = 'search-button'>Поиск</button>
        <input className = 'input' type="text" placeholder="Найти" />
      </div>
      <button className="login-button" onClick = {() => navigate('/admin')}>Личный кабинет</button>
    </header>
    
  );
};

export default Header;
