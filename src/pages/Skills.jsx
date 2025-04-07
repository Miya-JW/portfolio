import Footer from '../components/Footer';
import Language from '../assets/skill/language.svg';
import Line from '../assets/skill/line.svg';
import SkillsImg from '../assets/skill/skills.svg';

const Skills = () => {


  return (
    <div className="min-h-screen bg-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col items-center justify-center mt-20 mb-40'>
        <img src={Language} alt="Language" />
        <img src={Line} alt="Line" className='mt-40'  />
        <img src={SkillsImg} alt="Skills" className='mt-40' />
      </div>
      <Footer />
    </div>
  );
};

export default Skills; 