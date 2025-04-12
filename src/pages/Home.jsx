import React from 'react';
import avatar from '../assets/imgs/home_avatar.svg';
import miya_line from '../assets/imgs/miya_line.svg';
import geo from '../assets/imgs/home_geo.svg';
import obssesion from '../assets/imgs/home_obssesion.svg';
import latest_work from '../assets/imgs/home_latest_work.svg';
import solar from '../assets/imgs/home_solar.svg';
import maori from '../assets/imgs/home_maori.svg';
import photo from '../assets/imgs/photo.png';
import web from '../assets/imgs/web.svg';
import uiux from '../assets/imgs/uiux.svg';
import miyawu from '../assets/imgs/miyawu.svg';
import mapsmall from '../assets/imgs/mapsmall.png';
import obssesion1 from '../assets/imgs/obsession.svg';
import obssesion2 from '../assets/imgs/obsession1.svg';
import latest_work1 from '../assets/imgs/latestwork.svg';
import solar1 from '../assets/imgs/solar.png';
import solar2 from '../assets/imgs/solar1.svg';
import maori1 from '../assets/imgs/maori.png';
import maori2 from '../assets/imgs/maori1.svg';

const Home = () => {
    return (
        <div className="min-h-screen bg-dark">
            <div className="container mx-auto px-4 py-8">
                <div className=" flex flex-col items-center justify-center max-w-full mt-20">
                    {/* avatar */}
                    <div className="hidden md:block">
                        <img src={avatar} alt="avatar" className="w-full md:w-full mx-auto" />
                    </div>
                    <div className="block md:hidden -mt-20 flex flex-col items-center">
                        <img src={web} alt="web" className="w-full mb-4" />
                        <img src={photo} alt="photo" className="w-full mb-4 w-1/2" />
                        <img src={uiux} alt="uiux" className="w-full mb-4" />
                    </div>
                    {/* miya wu */}
                    <div className='mt-20'>
                        <img src={miya_line} alt="miya wu" className="hidden md:block" />
                        <img src={miyawu} alt="miya wu" className='block -mt-8  md:hidden mt-20' />
                    </div>
                    {/* geo */}
                    <div className='mt-40'>
                        <img src={geo} alt="geo" className='hidden md:block' />
                        <img src={mapsmall} alt="geo" className='block -mt-32 md:hidden' />
                    </div>
                    {/* obsession */}
                    <div className='mt-40 flex flex-col items-center justify-center'>
                        <img src={obssesion} alt="obsession" className='hidden md:block' />
                        <img src={obssesion1} alt="obsession" className='block -mt-32 md:hidden' />
                        <img src={obssesion2} alt="obsession" className='block mt-8 md:hidden' />
                    </div>
                    {/* latest work */}
                    <div className='mt-40 flex flex-col items-center justify-center'>
                        <img src={latest_work} alt="latest work" className='hidden md:block' />
                        <img src={latest_work1} alt="latest work" className='block -mt-32 md:hidden' />

                        <img src={solar} alt="solar" className='  hidden md:block mt-20' />
                        <img src={solar1} alt="solar" className='block mt-8 md:hidden' />
                        <img src={solar2} alt="solar" className='block w-1/2  mt-8 md:hidden' />

                        <img src={maori} alt="maori" className='  hidden md:block mt-40 mb-20' />
                        <img src={maori1} alt="maori" className='block mt-8 md:hidden' />
                        <img src={maori2} alt="maori" className='block w-1/2  mt-8 md:hidden' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home; 