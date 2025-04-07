import Footer from '../components/Footer';
import AboutMe from '../assets/about/about.svg';
import Geo from '../assets/about/geo.svg';
import GeoMap from '../assets/about/geo_map.svg';
import Line from '../assets/about/line.svg';
import Line2 from '../assets/about/line2.svg';

import Obsession from '../assets/about/obsession.svg';
import TalentBox from '../components/TelantBox';


const About = () => {
  return (
    <div className="min-h-screen bg-dark text-light  ">
      <div className='flex flex-col items-center justify-center mb-20'>
      <img src={AboutMe} alt="About Me" />
      <img src={Geo} alt="Geo"  />
      <img src={GeoMap} alt="Geo Map" className='mt-40'/>
      <img src={Line} alt="Line" className='mt-40'/>
      <TalentBox />
      <img src={Line2} alt="Line Map" className='mt-40'/>
      <img src={Obsession} alt="Obsession" className='mt-20'/>
      </div>
      <Footer />
    </div>
  );
};

export default About; 