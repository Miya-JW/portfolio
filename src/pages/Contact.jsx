import ContectImg from '../assets/resume/contact.svg';
import contact1 from '../assets/resume/contact1.svg';
import contact2 from '../assets/resume/contact2.svg';
const Contact = () => {
  return (
    <div className='min-h-screen flex items-center justify-center '>
        <img src={ContectImg} alt="Contact" className='-mt-80 hidden md:block' />
        <div className='flex flex-col items-center justify-center -mt-72 md:hidden'>
          <img src={contact1} alt="contact1" className='w-1/2' />
          <img src={contact2} alt="contact2" className='w-1/2 mt-4' />
        </div>
    </div>
  );
};

export default Contact; 