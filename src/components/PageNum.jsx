import React, { useState } from "react";
import { Link } from "react-router-dom";
import line from "../assets/line.png";
import { ModalDownload } from "./ModalDownload";

export const PageNum = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <div className="flex flex-col gap-5 ">
        <Link
          className="flex gap-3 items-center focus:text-[#B5B5B5]"
          to="/projects"
        >
          01 <img src={line} className="w-[33px] h-0.5" alt="" />
          Projects
        </Link>

        <Link
          className="flex gap-3 items-center focus:text-[#B5B5B5]"
          onClick={handleOpen}
        >
          02 <img src={line} className="w-[33px] h-0.5" alt="" />
          Download Resume
        </Link>

        <Link
          className="flex gap-3 items-center focus:text-[#B5B5B5]"
          to="/contact"
        >
          03 <img src={line} className="w-[33px] h-0.5" alt="" />
          Contact
        </Link>

        <ModalDownload open={open} setOpen={setOpen} handleOpen={handleOpen} />
      </div>
    </div>
  );
};
