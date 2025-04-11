import React from 'react';
import ProjectNav from '../components/ProjectNav';
import Line1 from '../assets/projects/line01.svg';
import Line2 from '../assets/projects/line02.svg';
import Line3 from '../assets/projects/line03.svg';
import Solar from '../assets/projects/solar.svg';
import Blog from '../assets/projects/aBlog.svg';
import Connect from '../assets/projects/connectit.svg';
import MoreDetails from '../assets/projects/moreDetail.svg';
import { Link } from 'react-router-dom';
const WebOverview = () => {
    return (
        <div>
            <ProjectNav />
            <div className="container mx-auto px-4 pt-4">
                <div className="flex flex-col items-center justify-center">
                    <img src={Line1} alt="Line1" className="mt-20" />
                    <img src={Solar} alt="Solar" className="mt-20" />
                    <Link to="/projects/solar-energy-dashboard">
                        <img src={MoreDetails} alt="MoreDetails" className="mt-20 mb-20 cursor-pointer" />
                    </Link>
                    <img src={Line2} alt="Line2" className="mt-40" />
                    <img src={Blog} alt="Blog" className="mt-20" />
                    <Link to="/projects/a-blog">
                        <img src={MoreDetails} alt="MoreDetails" className="mt-20 mb-20 cursor-pointer" />
                    </Link>
                    <img src={Line3} alt="Line3" className="mt-40" />
                    <img src={Connect} alt="Connect" className="mt-20" />
                    <Link to="/projects/connect-it">
                        <img src={MoreDetails} alt="MoreDetails" className="mt-20 mb-20 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WebOverview;
