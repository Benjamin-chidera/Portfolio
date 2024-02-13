import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import download from "../assets/download.png"
import x from "../assets/x.png"

export function ModalDownload({ handleOpen, open, setOpen }) {
  return (
    <>
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
          <img src={download} alt="" className="w-[110px] h-[110px] mx-auto" />

          <p className="text-[#F16529]">Benjamin’s Resume.pdf</p>
        </DialogHeader>
        <DialogBody>
          <div>
            <h1 className="text-[45px] text-center text-white">
              Download In Progress!
            </h1>
            <p className="text-[16px] text-center text-[#B5B5B5]">
              Kindly check your downloads for the downloaded file.
            </p>

            <div className=" text-center">
              <button className="w-[248px] h-[47px] bg-white mt-5 rounded text-black font-bold">
                Go to Downloads
              </button>
            </div>
          </div>
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
    </>
  );
}
