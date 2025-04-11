import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProjectNav = () => {
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState('UI/UX Design');
    const [selectedProject, setSelectedProject] = useState(null);

    const uiuxProjects = [
        { name: 'KUPU KUPU', path: '/projects/kupu-kupu' },
        { name: 'Te Kemu Arapū', path: '/projects/te-kemu-arapu' },
    ];

    const webProjects = [
        { name: 'Solar Energy Dashboard', path: '/projects/solar-energy-dashboard' },
        { name: 'A Blog', path: '/projects/a-blog' },
        { name: 'Connect-It', path: '/projects/connect-it' },
    ];

    useEffect(() => {
        // accept the pathname and set the selected category and project
        if (location.pathname.startsWith('/projects/kupu-kupu') || location.pathname.startsWith('/projects/te-kemu-arapu')) {
            setSelectedCategory('UI/UX Design');
            setSelectedProject(location.pathname.split('/').pop().replace('-', ' ')); // get the project name
        } else if (location.pathname.startsWith('/projects/solar-energy-dashboard') ||
            location.pathname.startsWith('/projects/a-blog') ||
            location.pathname.startsWith('/projects/connect-it')) {
            setSelectedCategory('Web Development');
            setSelectedProject(location.pathname.split('/').pop().replace('-', ' ')); // get the project name
        } else {
            setSelectedCategory('UI/UX Design');//default category
        }
    }, [location.pathname]);

    return (
        <div className="container w-full flex justify-center mt-12">
            <div className="flex space-x-0">
                <div className="min-w-[200px]">
                    <Link
                        to="/projects/uiux-overview"
                        className={`text-2xl px-32 py-4 rounded-md cursor-pointer ${selectedCategory === 'UI/UX Design' ? 'bg-grey ' : ''}`}
                        onClick={() => setSelectedCategory('UI/UX Design')}
                    >
                        UI/UX Design
                    </Link>
                    {selectedCategory === 'UI/UX Design' && (
                        <ul className="mt-8">
                            {uiuxProjects.map((project) => (
                                <li key={project.name} className="text-center">
                                    <Link
                                        to={project.path}
                                        className={`text-lg hover:text-gray-300 ${selectedProject === project.name ? 'underline' : ''}`}
                                        onClick={() => setSelectedProject(project.name)}
                                    >
                                        {project.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="min-w-[200px]">
                    <Link
                        to="/projects/web-overview"
                        className={`text-2xl px-24 py-4 rounded-md cursor-pointer ${selectedCategory === 'Web Development' ? 'bg-grey ' : ''}`}
                        onClick={() => setSelectedCategory('Web Development')}
                    >
                        Web Development
                    </Link>
                    {selectedCategory === 'Web Development' && (
                        <ul className="mt-8">
                            {webProjects.map((project) => (
                                <li key={project.name} className="text-center">
                                    <Link
                                        to={project.path}
                                        className={`text-lg hover:text-gray-300 ${selectedProject === project.name ? 'underline' : ''}`}
                                        onClick={() => setSelectedProject(project.name)}
                                    >
                                        {project.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectNav;