import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { ModalMessage } from "./ModalMessage";
import { CSSTransition } from "react-transition-group";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);



  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <nav className="px-3 md:ps-[40px] navbar pt-1">
      <div className="flex justify-between items-center">
        <Link className="font-[600] text-[30px]">Benjamin.</Link>

        <div className="hidden md:flex gap-5 items-center text-[#FFFFFF] font-[600]">
          {/* this is for medium screen devices */  }
          <Link to={"/projects"}>Projects</Link>
          <Link onClick={handleOpen}>Download Resume</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
      {isOpen && (
        <CSSTransition
        in={isOpen}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={"fade-in-left"}
        >
          <div className="md:hidden flex flex-col mt-5 py-10 gap-5 items-center text-[#FFFFFF] font-[600] bg-[#554848] z-10 absolute w-[330px] fade-in-left">
            {/* this is for mobile devices */}
            <Link to={"/projects"}>Projects</Link>
            <Link onClick={handleOpen}>Download Resume</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        </CSSTransition>
      )}

      <ModalMessage open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </nav>
  );
};
