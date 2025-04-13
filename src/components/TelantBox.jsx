import React, { useState } from 'react';
import Img1 from '../assets/about/img1.svg'
import Img2 from '../assets/about/img2.svg'
import Img3 from '../assets/about/img3.svg'
import Img4 from '../assets/about/img4.svg'
import Img5 from '../assets/about/img5.svg'
import Img6 from '../assets/about/img6.svg'
import Img7 from '../assets/about/img7.svg'
import Img8 from '../assets/about/img8.svg'

const TalentBox = () => {
    const [selectedTalent, setSelectedTalent] = useState('Quick Learner');

    const talents = {
        'Quick Learner': {
            image: Img1,
            description: "Mastered Korean to Level 5 within just one year, and improved my English to an IELTS score of 7 in six months, starting from beginner levels. With no previous IT background, I rapidly learned Java and web technologies. In two months, I developed a Java-based car rental system and a full-stack blog website using HTML, CSS, JavaScript, AJAX, Node.js, Express, and MariaDB. Additionally, I quickly acquired skills in React and Sequelize, using them to build a full-stack website for logging and sharing books, music, and movies."
        },
        'Critical Thinking': {
            image: Img2,
            description: "During my internship, while working on the Te Reo Māori Board Game: Prototype Development Extension (Mobile) project, I conducted a thorough analysis of the previous version of the game. I realized that the simple board game format was not fully effective in promoting the learning of the Māori language and stimulating interest among learners. To better achieve the project's goals, I suggested incorporating more educational tools within the game designed specifically for learning purposes. Additionally, I proposed adding a learning mode that is beginner-friendly and provides a variety of educational and entertaining options for users. This approach aimed to enhance engagement and offer a more comprehensive learning experience."
        },
        'Creativity': {
            image: Img3,
            description: "In my Information Visualization course, I embraced the essence of creativity, which is not about creating something entirely new but about presenting existing elements in novel ways. Creativity involves taking existing elements and reimagining them through combination and transformation. For this project, I innovated by redesigning the traditional family tree into a concentric circles format. Additionally, I integrated a timeline that encircles the concentric circles, allowing for simultaneous display of family members' relationships along with their chronological relationships. This creative approach transformed the conventional family tree into a dynamic visualization that more effectively demonstrates the interconnectedness of time and relationships within a family."
        },
        'Problem-Solving': {
            image: Img4,
            description: "During my internship project's testing phase, we received negative feedback on a particular game segment that testers found stressful and uninteresting. Since we had a weekly testing schedule to adhere to, I quickly revised this segment by introducing random gifts and flashcards with vocabulary. We conducted an additional test immediately, which received positive feedback. This change allowed us to complete the testing of this module on time, ensuring the further development of the prototype was on schedule."
        },
        'Continuous Learning': {
            image: Img5,
            description: "In the environment where I grew up, people generally believed that learning was only something you did while in school. However, after leaving the academic setting, I didn't stop learning. I've explored painting, ice skating, learned Spanish, and even tried playing the guitar and piano. To outsiders, these activities might seem like distractions, but I truly enjoy them. I always maintain a sense of curiosity and a desire to discover new things, which is where the real joy of life lies. Therefore, during my master's studies, I didn't feel pressured by starting from scratch. Instead, I was excited by the opportunity to learn something new in each course, which made my educational journey thoroughly enjoyable."
        },
        'Time Management': {
            image: Img6,
            description: "During my second semester of my master's studies, I faced the challenge of balancing five courses with managing household duties. I utilized a calendar to meticulously schedule all tasks and assignment deadlines, allocating specific times for study and domestic activities each day. This method not only helped me achieve excellent grades in all five courses but also allowed me to enjoy leisure time traveling with friends. By effectively managing my time, I was able to maintain a perfect balance between academic responsibilities and personal life, demonstrating the importance and effectiveness of good time management."
        },
        'Adaptability': {
            image: Img7,
            description: "In a project I was involved in, team members came from different countries and had diverse areas of expertise. At the beginning, due to differences in professional backgrounds, our teamwork efficiency was low. As the team leader, I took the initiative to understand each member's strengths and revised our work plan accordingly, assigning tasks based on individual expertise. These adjustments significantly improved our collaboration, and the project ultimately received very positive feedback from the client."
        },
        'Empathy': {
            image: Img8,
            description: "In a project I was leading, one team member had to return to her home country for surgery, which concerned her about the impact of her absence on the project and her course grade. As the team leader, I first had a private conversation with her to address her worries and adjusted her responsibilities. We also scheduled video meetings at times convenient for her to keep her updated on the project progress and to check on her work. Later, with the consent of all team members, we shared her workload to ensure the project was completed to a high standard."
        }
    };

    return (
        <div className="flex flex-row mt-0 md:flex-row justify-between p-8 bg-dark text-light md:mt-32 md:-ml-56">
            {/* First Column - Talent List */}
            <div className="w-1/4 text-sm  flex flex-col items-end md:w-1/3 md:text-2xl space-y-12">
                {Object.keys(talents).map((talent) => (
                    <button
                        key={talent}
                        onClick={() => setSelectedTalent(talent)}
                        className={`text-right hover:text-gray-300 transition-colors ${
                            selectedTalent === talent ? 'underline' : ''
                        }`}
                    >
                        {talent}
                    </button>
                ))}
            </div>

            {/* Second Column - Image */}
            <div className="hidden md:flex w-1/3 items-center justify-center">
                <img 
                    src={talents[selectedTalent].image} 
                    alt={selectedTalent}
                    className="max-w-full h-auto"
                />
            </div>

            {/* Third Column - Description */}
            <div className="w-3/4 text-[13px] ml-4 md:w-1/3  text-light  flex items-center justify-center text-[18px] md:text-[22px]">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4">
                    <p className="leading-relaxed">
                        {talents[selectedTalent].description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TalentBox;
