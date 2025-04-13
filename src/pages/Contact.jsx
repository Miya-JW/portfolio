import contact1 from '../assets/resume/contact1.svg';
import phone from '../assets/resume/phone.svg';
import email from '../assets/resume/email.svg';
import address from '../assets/resume/address.svg';
import linkedin from '../assets/resume/linkedin.svg';
import github from '../assets/resume/github.svg';
const Contact = () => {
  return (
    <div className='min-h-screen flex items-center justify-center '>
   

      <div className='flex flex-col items-center justify-center -mt-72 md:flex-row md:space-x-40'>
        <img src={contact1} alt="contact1" className='w-1/2' />

        <div className='flex flex-col items-start justify-start  mt-12 space-y-4 text-sm md:w-1/2 md:text-xl'>
          <div className='flex flex-row items-center justify-start space-x-4'>
            <img src={phone} alt="phone" className='w-[25px] md:w-[50px]' />
            <div>+64-027-455-1830</div>
          </div>
          <div className='flex flex-row items-center justify-start space-x-4'>
            <img src={email} alt="email" className='w-[25px] md:w-[50px]' />
            <div>miya.wujing@gmail.com</div>
          </div>
          <div className='flex flex-row items-center justify-start space-x-4'>
            <img src={address} alt="address" className='w-[25px] md:w-[50px]' />
            <div>Hamilton, New Zealand</div>
          </div>
          <div className='flex flex-row items-center justify-start space-x-4'>
            <img src={linkedin} alt="linkedin" className='w-[25px] md:w-[50px]' />
            <div className='hover:text-blue-500 hover:underline'>https://www.linkedin.com/in/miya-j-wu/</div>
          </div>
          <div className='flex flex-row items-center justify-start space-x-4'>
            <img src={github} alt="github" className='w-[25px] md:w-[50px]' />
            <div className='hover:text-blue-500 hover:underline'>https://github.com/Miya-JW</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact; 