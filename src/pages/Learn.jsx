import LearnImg from '../assets/learn/learn.svg';
import newzealand from '../assets/learn/newzealand.svg';
import korea from '../assets/learn/korea.svg';


const Learn = () => {
  return (
    <div className="min-h-screen w-full bg-dark py-12 px-4 sm:px-6 lg:px-8 ">
      <div className='flex flex-col items-center justify-center  '>
      <div className="flex flex-col justify-center items-center md:hidden">
        <img src={newzealand} alt="newzealand" className="mb-4 ml-4" />
        <img src={korea} alt="korea" />
      </div>
      <div className="hidden md:flex justify-center mt-40 mb-40">
        <img src={LearnImg} alt="Learn" />
      </div>
      </div>
 
      
    </div>
  );
};

export default Learn; 