import ResumePDF from '../assets/resume/resume.pdf';
import Download from '../assets/resume/download.svg';
import resume1 from '../assets/resume/resume1.jpg';
import resume2 from '../assets/resume/resume2.jpg';

const Resume = () => {
  return (
    <div className="min-h-screen bg-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center ">

        <div className='flex flex-row items-center justify-center space-x-4 md:mt-40'>
          <img src={resume1} alt="resume1" className='w-1/3 rounded-md' />
          <img src={resume2} alt="resume2" className='w-1/3 rounded-md' />
        </div>
        <a
          href={ResumePDF}
          download
          className=" hover:bg-opacity-80  text-xl py-2 px-4 rounded-md transition-colors"
        >
          <img src={Download} alt="Download" />
        </a>
      </div>


    </div>
  );
};

export default Resume; 