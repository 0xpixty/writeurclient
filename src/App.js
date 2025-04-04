import React, { useState } from 'react';
import { FaHome, FaCog, FaCode, FaBook } from 'react-icons/fa';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const showContent = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      <div className="navbar">
        <a onClick={() => showContent('home')}>
          <FaHome /> Главная
        </a>
        <a onClick={() => showContent('commands')}>
          <FaCog /> menus_settings
        </a>
      </div>

      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <div className={`content ${activeTab === 'home' ? 'active' : ''}`}>
        <h1>Добро пожаловать!</h1>
        <p>Это мой сайт с эффектом стекла и неоновыми шарами.</p>
      </div>

      <div className={`content ${activeTab === 'commands' ? 'active' : ''}`}>
        <h1>Экскурс по командам</h1>
        <div className="command">
          <h2><FaCode /> <strong>git clone</strong></h2>
          <p><FaBook /> Клонирует репозиторий с GitHub на твой компьютер.</p>
          <p>Пример: <code>git clone https://github.com/username/repo.git</code></p>
        </div>
        <div className="command">
          <h2><FaCode /> <strong>git add</strong></h2>
          <p><FaBook /> Добавляет изменения в индекс для следующего коммита.</p>
          <p>Пример: <code>git add index.html</code></p>
        </div>
        <div className="command">
          <h2><FaCode /> <strong>git commit</strong></h2>
          <p><FaBook /> Сохраняет изменения в локальном репозитории с сообщением.</p>
          <p>Пример: <code>git commit -m "Добавил новую страницу"</code></p>
        </div>
      </div>
    </div>
  );
}

export default App;