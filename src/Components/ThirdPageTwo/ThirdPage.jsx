import React from 'react';
import style from './style.module.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Illustration from './SearcherScreenshot.png';

const ArrowDownStyle = {
  color: '#F8DD2E',
  fontSize: '60px'
}


const ThirdPage = (props) => {

  return (
    <div className = {style.superWrapper}>
      <div className = {style.wrapper}>
        <div className = {style.arrowUp}>
                <a href = '#thirdPage' style = {{textDecoration: "none"}}>
                  <ExpandLessIcon style = {ArrowDownStyle} />
                </a>
          </div>
           <div className = {style.content}>
              <div className = {style.imageWrapper}>
                <img className = {style.image} src = {Illustration} alt = 'Ilustration'/>
              </div>
              <div className = {style.description}>
                  <h2 className = {style.title}>Поисковик репозиториев на GitHub</h2>
                  <h2 className = {style.descriptionText}>Web - приложение для поиска репозиториев, размещенных на GitHub. <a href='https://zhihorka.github.io/GitHubSearcher' className = {style.reference}>демо</a></h2>
              </div>
           </div>
          <div className = {style.arrowDown}>
                <a href = '#thirdPageThree' style = {{textDecoration: "none"}}>
                  <ExpandMoreIcon style = {ArrowDownStyle} />
                </a>
          </div>
      </div>
    </div>
  );
}

export default ThirdPage;