import React from 'react';
import style from './style.module.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Illustration from './LeclairScreenshot.png';

const ArrowDownStyle = {
  color: '#F8DD2E',
  fontSize: '60px'
}


const ThirdPage = (props) => {

  return (
    <div className = {style.superWrapper}>
      <div className = {style.wrapper}>
        <div className = {style.arrowUp}>
                <a href = '#thirdPageFour' style = {{textDecoration: "none"}}>
                  <ExpandLessIcon style = {ArrowDownStyle} />
                </a>
          </div>
           <div className = {style.content}>
              <div className = {style.imageWrapper}>
                <img className = {style.image} src = {Illustration} alt = 'Ilustration'/>
              </div>
              <div className = {style.description}>
                  <h2 className = {style.title}>l-eclair</h2>
                  <h2 className = {style.descriptionText}>Первый опыт работы с JavaScript, зима 2019 год.<a href='https://l-eclair.ru/podcast-selection.html' className = {style.reference}>l-eclair.ru</a></h2>
              </div>
           </div>
          <div className = {style.arrowDown}>
                <a href = '#finalPage' style = {{textDecoration: "none"}}>
                  <ExpandMoreIcon style = {ArrowDownStyle} />
                </a>
          </div>
      </div>
    </div>
  );
}

export default ThirdPage;