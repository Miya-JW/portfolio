import React from 'react';
import ProjectNav from '../components/ProjectNav';
import TeKemuArapuImg from '../assets/maoriWeb/webgame.svg';

const TeKemuArapu = () => {
    return (
        <div>
            <ProjectNav />
            <div className="container mx-auto px-4 pt-4 flex flex-col items-center justify-center mb-20">
                <img src={TeKemuArapuImg} alt="TeKemuArapu" className="mt-20" />
            </div>
        </div>
    );
};

export default TeKemuArapu;
