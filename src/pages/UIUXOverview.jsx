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

            <div className="container mx-auto px-4 pt-4">
                <div className="flex flex-col items-center justify-center">
                    {/* 小屏幕显示的幽默消息 */}
                    <div className="flex flex-col items-center justify-center md:hidden text-center text-lg">
                        <p>Oops! This page doesn't support mobile devices. Please switch to a larger screen, or you might miss out on the fun!</p>
                    </div>

                    {/* 中屏幕及以上显示的内容 */}
                    <div className="hidden md:flex flex-col items-center">
                        <ProjectNav />
                        <img src={Line1} alt="Line1" className="mt-20" />
                        <img src={Mobile} alt="Mobile" className="mt-20" />
                        <Link to="/projects/kupu-kupu">
                            <img src={MoreDetails} alt="MoreDetails" className="mt-20 cursor-pointer" />
                        </Link>

                        <img src={Line2} alt="Line2" className="mt-40" />
                        <img src={Web} alt="Web" className="mt-20" />
                        <Link to="/projects/te-kemu-arapu">
                            <img src={MoreDetails} alt="MoreDetails" className="mt-20 mb-20 cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UIUXOverview;
