import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "SQL" },
  { skill: "C++" },
  { skill: "Node.js" },
  { skill: "Express" },
  { skill: "Vercel" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
              Hey, my name is Daniel and I am a
              <span className="font-bold">{" collaborative"}</span>,
              <span className="font-bold">{" motivated"}</span>, and
              <span className="font-bold">{" adaptable "}</span>
              Computer Science Major studying at Los Angeles Harbor College.
            </p>
            <br />
            <p>
            I first started as a self-taught developer learning through online resources for about a year . But I chose to go back to college to purse a degree in Computer Science. I am highly motivated and eager to apply my skills to real-world to help contribute to.
            </p>
            <br />
            <p>
              My hobbies include reading, playing any sports, gaming, and
              traveling to new places. I am always looking for new experiences
              to help me grow as a person and as a developer.
            </p>
            <br />
            <p>
              I personally believe that the best way to learn is by doing. You
              can always become a better version of yourself. I am always
              striving to learn new things and expand my knowledge.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
