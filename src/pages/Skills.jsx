import Language from '../assets/skill/language.svg';
import Line from '../assets/skill/line.svg';
import SkillsImg from '../assets/skill/skills.svg';
import language1 from '../assets/skill/language1.svg';
import language2 from '../assets/skill/language2.svg';


const Skills = () => {


  return (
    <div className="min-h-screen bg-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col items-center justify-center mt-20 mb-40'>

        <img src={Language} alt="Language" className='hidden md:block' />
        <div className='flex flex-col items-center justify-center -mt-20 md:hidden'>
          <img src={language1} alt="language1" />
          <img src={language2} alt="language2" className='mt-4' />
        </div>

        <img src={Line} alt="Line" className=' mt-20 md:mt-40' />
        <img src={SkillsImg} alt="Skills" className='mt-16 md:mt-40' />
      </div>

    </div>
  );
};

export default Skills; 