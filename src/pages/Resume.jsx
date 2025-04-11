import ResumePDF from '../assets/resume/resume.pdf';
import Img1 from '../assets/resume/img.svg';
import Download from '../assets/resume/download.svg';


const Resume = () => {
  return (
    <div className="min-h-screen bg-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center mt-40">
        <img src={Img1} alt="Img1" />
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