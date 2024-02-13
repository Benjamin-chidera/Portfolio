import React from 'react'
import me from "../assets/me.png"
import { TfiEmail } from "react-icons/tfi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className="flex flex-wrap gap-7 items-center mt-10 lg:mt-0 contact-2560">
      <img src={me} alt="" className="w-[66px] h-[66px] rounded-full " />

      <Link className="flex items-center gap-2 " to="<EMAIL>">
        <TfiEmail color="#B5B5B5" />
        <p className="font-semibold text-[#B5B5B5]">Email Me</p>
        <FaExternalLinkAlt color="#B5B5B5" />
      </Link>

      <Link
        className="flex items-center gap-2"
        to="https://github.com/Benjamin-chidera"
      >
        <FaGithub color="#B5B5B5" />
        <p className="font-semibold text-[#B5B5B5]">GitHub</p>
        <FaExternalLinkAlt color="#B5B5B5" />
      </Link>
    </div>
  );
}
