import React from 'react';
import style from './style.module.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Illustration from './EduqSpeech.png';

const ArrowDownStyle = {
  color: '#F8DD2E',
  fontSize: '60px'
}


const ThirdPage = (props) => {

  return (
    <div className = {style.superWrapper}>
      <div className = {style.wrapper}>
        <div className = {style.arrowUp}>
                <a href = '#thirdPageThree' style = {{textDecoration: "none"}}>
                  <ExpandLessIcon style = {ArrowDownStyle} />
                </a>
          </div>
           <div className = {style.content}>
              <div className = {style.imageWrapper}>
                <img className = {style.image} src = {Illustration} alt = 'Ilustration'/>
              </div>
              <div className = {style.description}>
                  <h2 className = {style.title}>Eduq</h2>
                  <h2 className = {style.descriptionText}>Сервис для улучшения качества образования на хакатоне в команде с Владиславом @vhdev и Давидом @DavidLi2002. <a href='https://yadi.sk/i/8x3ZgGzp8m8nFA' className = {style.reference}>запись выступления</a></h2>
              </div>
           </div>
          <div className = {style.arrowDown}>
                <a href = '#thirdPageFive' style = {{textDecoration: "none"}}>
                  <ExpandMoreIcon style = {ArrowDownStyle} />
                </a>
          </div>
      </div>
    </div>
  );
}

export default ThirdPage;