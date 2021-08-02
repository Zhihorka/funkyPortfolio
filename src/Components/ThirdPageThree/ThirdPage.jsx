import React from 'react';
import style from './style.module.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Illustration from './Eda.png';

const ArrowDownStyle = {
  color: '#F8DD2E',
  fontSize: '60px'
}


const ThirdPage = (props) => {

  return (
    <div className = {style.superWrapper}>
      <div className = {style.wrapper}>
        <div className = {style.arrowUp}>
                <a href = '#thirdPageTwo' style = {{textDecoration: "none"}}>
                  <ExpandLessIcon style = {ArrowDownStyle} />
                </a>
          </div>
           <div className = {style.content}>
              <div className = {style.imageWrapper}>
                <img className = {style.image} src = {Illustration} alt = 'Ilustration'/>
              </div>
              <div className = {style.description}>
                  <h2 className = {style.title}>Верстка</h2>
                  <h2 className = {style.descriptionText}>Верстаю React компоненты, использую библиотеки для быстрой верстки. <a href='https://zhihorka.github.io/arcanite-test-task/' className = {style.reference}>демо</a></h2>
              </div>
           </div>
          <div className = {style.arrowDown}>
                <a href = '#thirdPageFour' style = {{textDecoration: "none"}}>
                  <ExpandMoreIcon style = {ArrowDownStyle} />
                </a>
          </div>
      </div>
    </div>
  );
}

export default ThirdPage;