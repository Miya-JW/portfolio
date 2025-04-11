import React from 'react';
import ProjectNav from '../components/ProjectNav';
import Line from '../assets/connect_it/line.svg';
import ConnectItImg from '../assets/connect_it/body.svg';

const ConnectIt = () => {
    return (
        <div>
            <ProjectNav />
            <div className="container mx-auto px-4 pt-4 flex flex-col items-center justify-center mb-20">
                <img src={Line} alt="Line" className="mt-20" />
                <div className="mt-4 text-lg text-light">View the complete project on my <a href="https://github.com/Miya-JW/connect-it" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">GitHub</a>.</div>
                <img src={ConnectItImg} alt="ConnectIt" className="mt-20 mb-20" />
            </div>
        </div>
    );
};

export default ConnectIt;
