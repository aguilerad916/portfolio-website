import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "UC Transfer Eligibility Calculator",
    description:
      "An application that allows users to check their eligibility for University of California (UC) schools by inputting their GPA and major, providing a simple interface to estimate admissions chances based on GPA ranges for different UC campuses.",
    image: "/uc-transfer-gpa.png",
    github: "https://github.com/aguilerad916/uc-transfer-gpa",
    link: "https://uc-transfer-gpa.vercel.app/",
  },
  {
    name: "WeatherWise",
    description:
      "WeatherWise is a weather app that allows users to search for the current weather in any city in the world.",
    image: "/WeatherWise.png",
    github: "https://github.com/aguilerad916/weatherwise",
    link: "https://weatherwise-nine.vercel.app/",
  },
  {
    name: "Internet Speed Test",
    description: "Web App that tests your internet speed.",
    image: "/internet-speed.png",
    github: "https://github.com/aguilerad916/internet-speed",
    link: "https://internet-speed.vercel.app/",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
