import React from 'react';
import contact1 from '../assets/resume/contact1.svg';
import phone from '../assets/resume/phone.svg';
import email from '../assets/resume/email.svg';
import address from '../assets/resume/address.svg';
import linkedin from '../assets/resume/linkedin.svg';
import github from '../assets/resume/github.svg';
import copy from '../assets/resume/copy.svg';
import ready from '../assets/resume/ready.svg';

const Contact = () => {
  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    const readyImage = document.getElementById(`readyImage${index}`);
    const copyImage = document.getElementById(`copyImage${index}`);
    if (readyImage && copyImage) {
      readyImage.style.display = 'block';
      copyImage.style.display = 'none';
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center -mt-72 w-full md:flex-row md:space-x-40'>

        <img src={contact1} alt="contact1" className='w-1/2 md:w-1/4' />

        <div className='flex flex-col items-start justify-start mt-12 space-y-4 text-sm  md:w-1/2 md:text-l lg:text-xl lg:w-1/3'>
          <div className='flex flex-row items-center justify-start space-x-4'>
            <img src={phone} alt="phone" className='w-[25px] md:w-[50px]' />
            <div>+64-027-455-1830</div>
            <div className='relative'>
              <img
                src={copy}
                alt="copy"
                id="copyImage1"
                className='w-[25px] cursor-pointer md:w-[30px]'
                onClick={() => handleCopy('+64-027-455-1830', 1)}
              />
              <img
                src={ready}
                alt="ready"
                id="readyImage1"
                className='w-[25px] hidden md:w-[30px]'
              />
            </div>
          </div>
          <div className='flex flex-row items-center justify-start space-x-4'>
            <img src={email} alt="email" className='w-[25px] md:w-[50px]' />
            <div>miya.wujing@gmail.com</div>
            <div className='relative'>
              <img
                src={copy}
                alt="copy"
                id="copyImage2"
                className='w-[25px] cursor-pointer md:w-[30px]'
                onClick={() => handleCopy('miya.wujing@gmail.com', 2)}
              />
              <img
                src={ready}
                alt="ready"
                id="readyImage2"
                className='w-[25px] hidden md:w-[30px]'
              />
            </div>
          </div>
          <div className='flex flex-row items-center justify-start space-x-4'>
            <img src={address} alt="address" className='w-[25px] md:w-[50px]' />
            <div>Hamilton, New Zealand</div>
            <div className='relative'>
              <img
                src={copy}
                alt="copy"
                id="copyImage3"
                className='w-[25px] cursor-pointer md:w-[30px]'
                onClick={() => handleCopy('Hamilton, New Zealand', 3)}
              />
              <img
                src={ready}
                alt="ready"
                id="readyImage3"
                className='w-[25px] hidden md:w-[30px]'
              />
            </div>
          </div>
          <div className='flex flex-row items-center justify-start space-x-4'>
            <a href="https://www.linkedin.com/in/miya-j-wu/" target="_blank" rel="noopener noreferrer" className='flex items-center'>
              <img src={linkedin} alt="linkedin" className='w-[25px] md:w-[50px]' />
              <div className='hover:text-blue-500 hover:underline ml-4'>https://www.linkedin.com/in/miya-j-wu/</div>
            </a>
          </div>
          <div className='flex flex-row items-center justify-start space-x-4'>
            <a href="https://github.com/Miya-JW" target="_blank" rel="noopener noreferrer" className='flex items-center'>
              <img src={github} alt="github" className='w-[25px] md:w-[50px]' />
              <div className='hover:text-blue-500 hover:underline ml-4'>https://github.com/Miya-JW</div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact; 