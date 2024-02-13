import React from "react";
import { Navbar } from "../components/Navbar";
import { JobTitle } from "../components/JobTitle";
import pic1 from "../assets/pic1.png";
import bt from "../assets/bt.png";
import node from "../assets/node.png";
import htnl from "../assets/htnl.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import wind from "../assets/wind.png";
import styled from "../assets/styled.png";
import supa from "../assets/supa.png";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <div>
      <Navbar />

      <main className="ps-3 md:ps-[40px]">
        <div className="mb-5">
          <img
            src={pic1}
            alt=""
            className="lg:hidden h-[300px] w-[300px] md:w-[400px] md:h-[400px]"
          />
        </div>

        <section className="flex justify-between items-center ">
          <div>
            <JobTitle />

            <div className="flex flex-wrap  gap-3 items-center images">
              {/* skills */}

              <img src={bt} alt="" className="w-[46.09px] h-[44.09px]" />
              <img src={node} alt="" className="w-[46.09px] h-[44.09px]" />
              <img src={htnl} alt="" className="w-[35.09px] h-[44.09px]" />
              <img src={js} alt="" className="w-[44.09px] h-[44.09px]" />
              <img src={react} alt="" className="w-[46.09px] h-[44.09px]" />
              <img src={css} alt="" className="w-[35.09px] h-[44.09px]" />
              <img src={wind} alt="" className="w-[44.09px] h-[44.09px]" />
              <img
                src={styled}
                alt=""
                className="w-[54.09px] object-cover h-[44.09px]"
              />
              <img
                src={supa}
                alt=""
                className="w-[54.09px] object-cover h-[44.09px]"
              />
            </div>

            <div className="mt-10">
              <Contact />
            </div>
          </div>

          <div>
            <img
              src={pic1}
              alt=""
              className="hidden lg:block h-[480px] w-[550px] img-screen-1440"
            />
          </div>
        </section>
      </main>
    </div>
  );
};
