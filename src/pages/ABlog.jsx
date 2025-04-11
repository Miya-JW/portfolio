import React from 'react';
import ProjectNav from '../components/ProjectNav';
import Line from '../assets/aBlog/line.svg';
import ABlogImg from '../assets/aBlog/ablog.svg';
const ABlog = () => {
    return (
        <div>
            <ProjectNav />
            <div className="container mx-auto px-4 pt-4 flex flex-col items-center justify-center mb-20">
                <img src={Line} alt="Line" className="mt-20" />
                <div className="mt-4 text-lg text-light">View the complete project on my <a href="https://github.com/Miya-JW/blog_website" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">GitHub</a>.</div>
                <img src={ABlogImg} alt="ABlog" className="mt-20" />
            </div>
        </div>
    );
};

export default ABlog;
