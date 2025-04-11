import React from 'react';
import ProjectNav from '../components/ProjectNav';
import Line from '../assets/solar/line.svg';
import SolarImg from '../assets/solar/body.svg';
import SolarImg2 from '../assets/solar/web.svg';
import Left from '../assets/solar/left.svg';
import Right from '../assets/solar/right.svg';
import Image1 from '../assets/solar/img1.png';
import Image2 from '../assets/solar/img2.png';
import Image3 from '../assets/solar/img3.png';
import Image4 from '../assets/solar/img4.png';
import Image5 from '../assets/solar/img5.png';
import Image6 from '../assets/solar/img6.png';
import Image7 from '../assets/solar/img7.png';
import Image8 from '../assets/solar/img8.png';
import Image9 from '../assets/solar/img9.png';

const SolarEnergyDashboard = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9]; // Assuming Image1 to Image5 are imported

    const handleLeftClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div>
            <ProjectNav />
            <div className="container mx-auto px-4 pt-4 flex flex-col items-center justify-center mb-20 ">
                <img src={Line} alt="Line" className="mt-20" />
                <div className="mt-4 text-lg text-light">View the complete project on <a href="https://www.figma.com/design/Ptqt9KMqKDZdekdMMzrtys/Aotea-Energy?node-id=1-7&t=NxrUCt8pJzgROzzM-1" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">Figma</a> & my <a href="https://github.com/Miya-JW/AoteaEnergy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">GitHub</a>.</div>
                <img src={SolarImg} alt="Solar" className="mt-20 -ml-40" />

                <div>
                    

                    <div className='flex items-center justify-center ml-80 mt-10 mb-10'>
                        <img 
                            src={Left} 
                            alt="Left" 
                            onClick={handleLeftClick} 
                            className={`cursor-pointer ${currentIndex > 0 ? 'visible' : 'invisible'}`}
                        />
                        <img 
                            src={images[currentIndex]} 
                            alt={`Image ${currentIndex + 1}`} 
                            className='rounded-[20px] w-[900px]' 
                        />
                        <img 
                            src={Right} 
                            alt="Right" 
                            onClick={handleRightClick} 
                            className={`cursor-pointer ${currentIndex < images.length - 1 ? 'visible' : 'invisible'}`}
                        />
                    </div>
                </div>

                <img src={SolarImg2} alt="Solar" className="mt-20" />
            </div>
        </div>
    );
};

export default SolarEnergyDashboard;
