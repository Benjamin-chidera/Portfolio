import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import mess from "../assets/mess.png";
import x from "../assets/x.png";
import { useNavigate } from "react-router-dom";

export const ModalMessage = ({ handleOpen, open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <Dialog open={open} handler={handleOpen} className="bg-[#292727]">
        <div className=" text-right">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>
              <img src={x} className="w-[30px] h-[30px]" alt="" />
            </span>
          </Button>
        </div>

        <DialogHeader className="flex flex-col gap-3">
          <img src={mess} alt="" className="w-[91.61px] h-[71px] mx-auto" />

          <p className="text-[#fff]">Message Sent!</p>
        </DialogHeader>
        <DialogBody>
          <div>
            <p className="text-[16px] text-center text-[#B5B5B5]">
              Thank you for reaching out, a response will be sent shortly. In
              the meantime, kindly check projects I’ve worked on.
            </p>

            <div className=" text-center">
              <button
                onClick={() => navigate("/projects")}
                className="w-[248px] h-[47px] bg-white mt-5 rounded text-black font-bold"
              >
                Go to Projects
              </button>
            </div>
          </div>
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
    </div>
  );
};
