import React from "react";
import { RxCross1 } from "react-icons/rx";

const Popup = ({ children, onClick, className }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black/50"
        onClick={onClick}
      ></div>
      <div className={`fixed top-1/2 left-1/2 -translate-1/2 ${className}`}>
        <RxCross1
          onClick={onClick}
          className="absolute top-[30px] right-[30px] text-3xl cursor-pointer"
        />
        {children}
      </div>
    </>
  );
};

export default Popup;
