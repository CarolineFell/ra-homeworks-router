import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from "./components/Menu/Menu";
import HomePage from './components/HomePage/HomePage';
import DriftPage from './components/DriftPage/DriftPage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import './App.css';

const navList = [
  {
    name: "Главная",
    link: "/",
  },
  {
    name: "Дрифт-такси",
    link: "/drift",
  },
  {
    name: "Time Attack",
    link: "/timeattack",
  },
  {
    name: "Forza Karting",
    link: "/forza",
  },
];

export default function App() {
  return (
    <Router>
      <div>
        <Menu navList={navList} />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}