import React from 'react';
import ProjectNav from '../components/ProjectNav';
import Line1 from '../assets/projects/line1.svg';
import Line2 from '../assets/projects/line2.svg';
import Mobile from '../assets/projects/mobile.svg';
import Web from '../assets/projects/web.svg';
import MoreDetails from '../assets/projects/moreDetail.svg';
import { Link } from 'react-router-dom';


const UIUXOverview = () => {
    return (
        <div>
            <ProjectNav />
            <div className="container mx-auto px-4 pt-4">
                <div className="flex flex-col items-center justify-center">
                    <img src={Line1} alt="Line1" className="mt-20" />
                    <img src={Mobile} alt="Mobile" className="mt-20" />
                    <Link to="/projects/kupu-kupu">
                    <img src={MoreDetails} alt="MoreDetails" className="mt-20 cursor-pointer"/>
                    </Link>
                
                    <img src={Line2} alt="Line2" className="mt-40" />
                    <img src={Web} alt="Web" className="mt-20" />
                    <Link to="/projects/te-kemu-arapu">
                        <img src={MoreDetails} alt="MoreDetails" className="mt-20 mb-20 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UIUXOverview;
