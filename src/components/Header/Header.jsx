import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import "./header.css"
import backgroundImage from '../../assets/images/bg-image.jpg';
import headerPicture from '../../assets/images/header-mentor.jpg';
const Header = () => {
    return (

        <div className="header-container text-left text-white"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}>

            <div className="column-left">
                <h1 className="header-text display-4 font-weight-bold">

                    <div className='dynamic-text'>
                        <p> 1-e-1  </p> <br />
                        <Typewriter
                            words={['Mentorluk', 'Kişiye Özel Kurslar', 'Yazılım', 'Farklı Tarz Kaynaklar']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </div>
                    <p>İle Yazılım Pusulan</p>

                </h1>

            </div>
            <div className="column-right">
                <img src={headerPicture} alt="mentor" />
            </div>
        </div>


    );
};

export default Header;
