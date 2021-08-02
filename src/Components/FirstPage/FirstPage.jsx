import React from 'react';
import useMediaQuery from 'react-responsive';
import style from './style.module.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import StarIcon from '@material-ui/icons/Star';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import WorkIcon from '@material-ui/icons/Work';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const ArrowDownStyle = {
    color: '#16519F',
    fontSize: '80px'
}



const theme = createMuiTheme({
  color: '#16519F'
});



const FirstPage = (props) => {

  
  
    const ButtonStyle = {
    color: '#16519F',
    textTransform: 'none',
    fontFamily: 'Roboto Mono'
  }



  return (
    <div className = {style.wrapper}>
            <div className = {style.arrowDown}>
              <a href = '#secondPage' style = {{textDecoration: "none"}}>
                <ExpandMoreIcon style = {ArrowDownStyle} />
              </a>
            </div>
            <div className = {style.content}>
              <h2 className = {style.greetings}>Привет, меня зовут Никита 👋</h2>
              <h2 className = {style.description}>Я создаю web-приложения. Ищу применение своим навыкам.</h2>
              <div className = {style.buttonWrapper}>
                    <Button startIcon={<StarIcon className = {style.linkIcon}/>} className = {style.linkButton}><h2  className = {style.linkText}>Навыки</h2></Button>
                    <Button startIcon={<TelegramIcon className = {style.linkIcon}/>} className = {style.linkButton}><h2 className = {style.linkText}>Телеграм</h2></Button>
                    <Button startIcon={<GitHubIcon className = {style.linkIcon}/>} className = {style.linkButton}><h2 className = {style.linkText}>GitHub</h2></Button>
                    <Button startIcon={<AlternateEmailIcon className = {style.linkIcon}/>} className = {style.linkButton}><h2 className = {style.linkText}>Почта</h2></Button>
                    <Button startIcon={<WorkIcon className = {style.linkIcon}/>} className = {style.linkButton}><h2 className = {style.linkText}>Резюме</h2></Button>
              </div>

            </div>
    </div>
  );
}

export default FirstPage;