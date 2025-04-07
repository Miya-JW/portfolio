import LearnImg from '../assets/learn/learn.svg';
import Footer from '../components/Footer';

const Learn = () => {
  return (
    <div className="min-h-screen bg-dark py-12 px-4 sm:px-6 lg:px-8 ">
      <div className='flex flex-col items-center justify-center  mt-40 mb-40'>
      <img src={LearnImg} alt="Learn" />
      </div>
      <Footer />
    </div>
  );
};

export default Learn; 