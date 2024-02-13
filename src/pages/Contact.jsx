import React, { useState } from "react";
import { ProjectTitle } from "../components/ProjectTitle";
import { ModalMessage } from "../components/ModalMessage";

export const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <main className="lg:flex justify-between gap-5 ps-3 md:ps-[40px] overflow-hidden">
      <ProjectTitle />

      <section className="p-5 md:h-screen md:w-[600px] bg-[#2D2D2D]">
        <h1 className="font-semibold text-[30px]">Send A Message</h1>

        <form className=" space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="From:"
            type="text"
            className="h-[40px] w-[400px] max-w-[100%] md:h-[52px] md:w-[610px] rounded bg-[#535353] px-5 outline-none"
          />
          <input
            placeholder="Subject:"
            type="text"
            className="h-[40px] w-[400px] max-w-[100%] md:h-[52px] md:w-[610px] rounded bg-[#535353] px-5 outline-none"
          />
          <textarea
            placeholder="Write a message:"
            type="text"
            className="h-[300px] w-[400px] max-w-[100%] md:h-[250px] md:w-[610px] lg:h[331px] rounded bg-[#535353] p-5 resize-none outline-none"
          />

          <br />
          <div className="text-center">
            <button
              className="w-[200px] h-[40px] md:w-[303px] md:h-[52px] text-center bg-white text-black rounded shadow font-bold"
              onClick={handleOpen}
            >
              Send Message
            </button>
          </div>
        </form>

        <ModalMessage open={open} setOpen={setOpen} handleOpen={handleOpen} />
      </section>
    </main>
  );
};
