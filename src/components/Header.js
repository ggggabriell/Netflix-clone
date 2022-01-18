import React from 'react';
import './Header.css';

export default ({black})=>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
                </a>
            </div>
            <div className='header--user'>
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"/>
                </a>
            </div>
        </header>
    );
}