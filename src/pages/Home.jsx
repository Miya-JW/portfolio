import React from 'react';
import avatar from '../assets/imgs/home_avatar.svg';
import miya_line from '../assets/imgs/miya_line.svg';
import geo from '../assets/imgs/home_geo.svg';
import obssesion from '../assets/imgs/home_obssesion.svg';
import latest_work from '../assets/imgs/home_latest_work.svg';
import solar from '../assets/imgs/home_solar.svg';
import maori from '../assets/imgs/home_maori.svg';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-dark">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center max-w-full mt-20">
                    {/* avatar */}
                    <img src={avatar} alt="avatar"  />
                    {/* miya wu */}
                    <div className='mt-20'>
                        <img src={miya_line} alt="miya wu" />
                    </div>
                    {/* geo */}
                    <div className='mt-40'>
                        <img src={geo} alt="geo" />
                    </div>
                    {/* obsession */}
                    <div className='mt-40'>
                        <img src={obssesion} alt="obsession" />
                    </div>
                    {/* latest work */}
                    <div className='mt-40'>
                        <img src={latest_work} alt="latest work" />
                        <img src={solar} alt="solar"  className='mt-20'/>
                        <img src={maori} alt="maori"  className='mt-40 mb-20'/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home; 