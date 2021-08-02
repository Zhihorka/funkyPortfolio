import React from 'react';
import style from './style.module.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Illustration from './programmerOnWork.jpg';

const ArrowDownStyle = {
  color: '#F8DD2E',
  fontSize: '60px'
}


const PracticePage = (props) => {

  return (
    <div className = {style.superWrapper}>
      <div className = {style.wrapper}>
        <div className = {style.arrowUp}>
                <a href = '#secondPage' style = {{textDecoration: "none"}}>
                  <ExpandLessIcon style = {ArrowDownStyle} />
                </a>
          </div>
           <div className = {style.content}>
              <div className = {style.imageWrapper}>
                <img className = {style.image} src = {Illustration} alt = 'Ilustration'/>
              </div>
              <div className = {style.description}>
                  <h2 className = {style.title}>Практика в Таможенная карта</h2>
                  <h2 className = {style.descriptionText}>Работа с frontend - частью на Typescript и React. Создание компонент и их стилизация, разработка макета приложения в Figma. <a href='https://customscard.ru/' className = {style.reference}>customscard.ru</a></h2>
              </div>
           </div>
          <div className = {style.arrowDown}>
                <a href = '#thirdPage' style = {{textDecoration: "none"}}>
                  <ExpandMoreIcon style = {ArrowDownStyle} />
                </a>
          </div>
      </div>
    </div>
  );
}

export default PracticePage;