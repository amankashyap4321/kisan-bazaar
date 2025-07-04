import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  if (location.pathname === "/seller/know-subsidy") return null;
  return (
    <>
      <footer className="bg-red-900 text-white h-12 px-4 md:px-12 text-center flex flex-row items-center justify-between">
        <p className="font-semibold text-sm md:text-base">Made by Team CRE PARADOX</p>
        <div className="flex flex-row text-lg md:text-2xl gap-3 md:gap-5">
          <a href={"https://github.com/amankashyap4321"} target="_blank">
            <FaGithub />
          </a>
          <a href={"https://www.linkedin.com/in/aryan-tyagi-08168b2a8/"} target="_blank">
            <FaLinkedinIn />
          </a>

          <a href={"https://www.instagram.com/aman_kashyap.4/"} target="_blank">
            <FaInstagram />     
          </a>
        </div>
      </footer>
    </>
  ); 
};

export default Footer;
