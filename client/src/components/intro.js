import React, {useEffect} from 'react';

import TopNav from './topNav';

import MainImages from '../data/mainImages';

let mainImagesIndex = 0;


const Intro = () => {
    return (
        <div> 
            <div>
                <img src={MainImages[mainImagesIndex].src} alt="" />
                <TopNav></TopNav>

            </div>  
            {/* <img src={MainImages[mainImagesIndex].src} alt="main_1" /> */}
        </div>
    )
};

export default Intro;
