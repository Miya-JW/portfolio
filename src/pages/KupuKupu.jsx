import React from 'react';
import ProjectNav from '../components/ProjectNav';
import KupuKupuImg from '../assets/maoriMobile/kupuKupu.svg';

const KupuKupu = () => {
    return (
        <div>
            <ProjectNav />
            <div className="container mx-auto px-4 pt-4 flex flex-col items-center justify-center mb-20">
                <img src={KupuKupuImg} alt="KupuKupu" className="mt-20" />
            </div>
        </div>
    );
};

export default KupuKupu;
