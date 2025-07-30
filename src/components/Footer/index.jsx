import React from "react";
import { BsTelegram } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-green-500">
      <div className="container mx-auto px-5 h-24 mt-20 flex items-center justify-between">
        <div className="">
          <h2 className="text-3xl max-sm:text-2xl">LOGOO</h2>
        </div>
        <div className="flex gap-3 text-3xl max-sm:text-2xl">
          <BsTelegram />
          <FaSquareInstagram />
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
