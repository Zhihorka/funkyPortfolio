import React, { useState }  from 'react';
import style from './style.module.css'
import FirstPage from '../FirstPage/FirstPage';
import SecondPage from '../SecondPage/SecondPage';
import PracticePage from '../PracticePage/PracticePage';
import ThirdPage from '../ThirdPage/ThirdPage';
import ThirdPageTwo from '../ThirdPageTwo/ThirdPage';
import ThirdPageThree from '../ThirdPageThree/ThirdPage';
import ThirdPageFour from '../ThirdPageFour/ThirdPage';
import ThirdPageFive from '../ThirdPageFive/ThirdPage';
import FinalPage from '../FinalPage/FinalPage';


const ApplicationForm = () =>{

    return(
        <div className = {style.wrapper}>
            <div className = {style.firstPage}  id = 'firstPage'>
                <FirstPage/>
            </div>
            <div className = {style.secondPage} id = 'secondPage'>
                <SecondPage/>
            </div>
            <div className = {style.practicePage} id = 'practicePage'>
                <PracticePage/>
            </div>
            <div className = {style.thirdPage} id = 'thirdPage'>
                <ThirdPage/>
            </div>
            <div className = {style.thirdPageTwo} id = 'thirdPageTwo'>
                <ThirdPageTwo/>
            </div>
            <div className = {style.thirdPageThree} id = 'thirdPageThree'>
                <ThirdPageThree/>
            </div>
            <div className = {style.thirdPageFour} id = 'thirdPageFour'>
                <ThirdPageFour/>
            </div>
            <div className = {style.thirdPageFive} id = 'thirdPageFive'>
                <ThirdPageFive/>
            </div>
            <div className = {style.finalPage} id = 'finalPage'>
                <FinalPage/>
            </div>
        </div>
    )
}


export default ApplicationForm;