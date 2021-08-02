import React from 'react';
import style from './style.module.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ArrowDownStyle = {
  color: '#4FCBE9',
  fontSize: '80px'
}

const FinalPage = (props) => {



  return (
    <div className = {style.superWrapper}>
      <div className = {style.wrapper}>
        <div className = {style.arrowUp}>
                  <a href = '#thirdPageFive' style = {{textDecoration: "none"}}>
                    <ExpandLessIcon style = {ArrowDownStyle} />
                    <div className = {style.content}>
                        <h2 className = {style.about}>🎓 Еще я учусь в Московском техническом университете связи и информатики.</h2>
                        <h2 className = {style.about}>Мой уровень владения английским языком - Intermediate. ✅</h2>
                        <h2 className = {style.about}>Мое резюме на <a href={`https://hh.ru/resume/dd671f8aff08112e580039ed1f766b786b6677`} className = {style.reference}>hh.ru👈</a></h2>
                        <h2 className = {style.about}>Мое резюме на <a href={`https://career.habr.com/zhihorka`} className = {style.reference}>Хабр Карьера👈</a></h2>
                    </div>
                  </a>
            </div>
        </div>
    </div>
  );
}

export default FinalPage;