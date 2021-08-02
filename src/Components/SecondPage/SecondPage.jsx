import React from 'react';
import style from './style.module.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ArrowDownStyle = {
  color: '#F07E74',
  fontSize: '80px'
}

const SecondPage = (props) => {


  return (
    <div className = {style.superWrapper}>
      <div className = {style.wrapper}>
        <div className = {style.arrowUp}>
              <a href = '#firstPage' style = {{textDecoration: "none"}}>
                <ExpandLessIcon style = {ArrowDownStyle} />
              </a>
        </div>
        <div className = {style.content}>
          <h2 className = {style.label}>💡 Мои навыки:</h2>
          <div className = {style.skillWrapper}>
              <div className = {style.skillItem}>
                <h2 className = {style.skillName}>⭐️ JavaScript</h2>
              </div>
              <div className = {style.skillItem}>
              <h2 className = {style.skillName}>⭐️ React JS</h2>
              </div>
              <div className = {style.skillItem}>
                 <h2 className = {style.skillName}>⭐️ Git</h2>
              </div>
              <div className = {style.skillItem}>
                 <h2 className = {style.skillName}>⭐️ API</h2>
              </div>
              <div className = {style.skillItem}>
                 <h2 className = {style.skillName}>⭐️ Верстка</h2>
              </div>
              <div className = {style.skillItem}>
                 <h2 className = {style.skillName}>⭐️ Node JS</h2>
              </div>
              <div className = {style.skillItem}>
                 <h2 className = {style.skillName}>⭐️ MongoDB</h2>
              </div>
              <div className = {style.skillItem}>
                 <h2 className = {style.skillName}>⭐️ SQL</h2>
              </div>
              <div className = {style.skillItem}>
                 <h2 className = {style.skillName}>⭐️ ООП</h2>
              </div>
              <div className = {style.skillItem}>
                 <h2 className = {style.skillName}>⭐️ Паттерны проектирования </h2>
              </div>
              <div className = {style.skillItem}>
                 <h2 className = {style.skillName}>⭐️ Linux</h2>
              </div>
          </div>
        </div>
        <div className = {style.arrowDown}>
              <a href = '#practicePage' style = {{textDecoration: "none"}}>
                <ExpandMoreIcon style = {ArrowDownStyle} />
              </a>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;