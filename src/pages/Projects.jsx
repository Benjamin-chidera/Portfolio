import React from "react";
import { Link } from "react-router-dom";
import net from "../assets/net.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { project } from "../components/Projects";
import { ProjectTitle } from "../components/ProjectTitle";

export const Projects = () => {
 

  const titleColor = {
    "JavaScript, React & Node": "#F16529",
    "React & Node": "#f16529",
    "HTML, CSS & Bootstrap": "#83CD29",
    "Bootstrap & CSS": "#83CD29",
  };
  
  return (
    <main className="lg:flex justify-between ps-3 md:ps-[40px]">
      <ProjectTitle />

      <section className="bg-[#2D2D2D] w-fit md:w-[570px] mx-auto md:mx-0 p-3 space-y-5 md:space-y-0 md:flex flex-wrap gap-5 project-2560">
        {project.map((p, i) => {
          const { title, body, link } = p;

          return (
            <div
              key={i}
              className=" space-y-3 bg-[#404040] h-[200px] w-[250px] md:w-[253px] p-3 relative project-2560-div "
            >
              <h1
                className=" font-[600] text-[14px]"
                style={{ color: titleColor[title] || "white" }}
              >
                {title}
              </h1>
              <h2 className="font-bold text-[20px]">{body}</h2>
              <div className="flex gap-5 items-center justify-between bottom-2 absolute">
                <Link
                  className="flex gap-2 items-center font-semibold"
                  to="https://github.com/Benjamin-chidera"
                >
                  <FaGithub />
                  {link.git}
                  <FaExternalLinkAlt />
                </Link>

                <Link
                  className="flex gap-2 items-center font-semibold"
                  to="https://comingSoon.com"
                >
                  <img src={net} alt="" />
                  {link.web}
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};
