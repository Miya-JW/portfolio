import React, { useState } from 'react';
import AboutMe from '../assets/about/about.svg';
import Geo from '../assets/about/geo.svg';
import GeoMap from '../assets/about/geo_map.svg';
import Line from '../assets/about/line.svg';
import Line2 from '../assets/about/line2.svg';
import Obsession from '../assets/about/obsession.svg';
import TalentBox from '../components/TelantBox';

import avatar from '../assets/about/avatar.svg';
import aboutme from '../assets/about/aboutme.svg';
import LC_line from '../assets/about/LC_line.svg';
import LC_img from '../assets/about/LC_img.svg';
import TT_line from '../assets/about/TT_line.svg';
import O_line from '../assets/about/O_line.svg';
import coffee from '../assets/about/coffee.svg';
import music from '../assets/about/music.svg';
import travel from '../assets/about/travel.svg';
import daydream from '../assets/about/daydream.svg';

const About = () => {
    const images = [coffee, music, travel, daydream];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="min-h-screen bg-dark text-light">
            <div className='flex flex-col items-center justify-center mb-20'>
                {/* About Me */}
                <div className='hidden md:flex flex-col items-center justify-center'>
                    <img src={AboutMe} alt="About Me" />
                </div>
                <div className='flex md:hidden flex-col items-center justify-center'>
                    <img src={avatar} alt="avatar" />
                    <img src={aboutme} alt="aboutme" className='mt-4' />
                </div>
                {/* Geo */}
                <div className='hidden md:flex flex-col items-center justify-center'>
                    <img src={Geo} alt="Geo" />
                    <img src={GeoMap} alt="Geo Map" className='mt-40' />
                </div>
                <div className='flex mt-12 md:hidden flex-col items-center justify-center'>
                    <img src={LC_line} alt="LC Line" />
                    <img src={LC_img} alt="LC Img" className='mt-8' />
                </div>

                {/* talent */}
                <div className='hidden md:flex flex-col items-center justify-center'>
                    <img src={Line} alt="Line" className='mt-40' />
                </div>
                <div className='flex mt-12 md:hidden flex-col items-center justify-center'>
                    <img src={TT_line} alt="TT Line" />
                </div>
                <TalentBox />
                {/* obsession */}
                <div className='hidden md:flex flex-col items-center justify-center'>
                    <img src={Line2} alt="Line Map" className='mt-40' />
                    <img src={Obsession} alt="Obsession" className='mt-20' />
                </div>
                <div className='flex mt-12 md:hidden flex-col items-center justify-center'>
                <img src={O_line} alt="O Line" />
                    <img 
                        src={images[currentIndex]} 
                        alt={`Image ${currentIndex + 1}`} 
                        className='mt-8 cursor-pointer' 
                        onClick={handleImageClick}
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default About; 