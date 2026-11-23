import React from "react";
import logo from "/public/logo.png";

import {
  FaFacebookF,
  FaShopify ,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaLocationArrow,
  FaBookOpen,
  FaTelegramPlane ,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-white bg-[#484f5a]   bg-center bg-repeat"
    //   style={{ backgroundImage: `url(${bgImage})`,
    //  backgroundSize: "100% 100%", }}
      
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 md:bg-black/50 bg-black/30 "></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={logo}
          alt="logo"
          className="h-67 md:px-10 pr-0 py-0 mb-6.25"
        />

        <h1 className="md:text-4xl text-[#ffffff] text-2xl font-bold mb-6">Princess Fashion </h1>
       

        <div className="flex flex-col gap-4 w-64 my-4">
   
          <a
            href="https://www.facebook.com/PrincessFashion.AmiraKaram"
            target="_blank"
            className="flex items-center font-semibold hover:font-bold justify-center gap-3 bg-blue-600 py-3 rounded-lg hover:scale-105 transition"
          >
            {" "}
            <FaFacebookF size={20} />  Facebook{" "}
          </a>{" "}

          <a
            href="https://www.instagram.com/princessfashion99?dmpr=MXQzMDNnNmNpcjJwNg%3D%3D&utm_source=qr"
            target="_blank"
            className="flex items-center font-semibold hover:font-bold justify-center gap-3 bg-blue-600 py-3 rounded-lg hover:scale-105 transition"
          >
            {" "}
            <FaInstagram size={20} />  Instagram{" "}
          </a>{" "}

          <a
            href="https://www.tiktok.com/@princess.fashion67?_r=1&_t=ZS-9BaqYpuMLeW"
            target="_blank"
            className="flex items-center font-semibold hover:font-bold justify-center gap-3 bg-blue-600 py-3 rounded-lg hover:scale-105 transition"
          >
            {" "}
            <FaTiktok size={20} /> Tiktok{" "}
          </a>{" "}
  
          <a
            href="https://princessfashionstore.com/"
            target="_blank"
            className="flex items-center font-semibold hover:font-bold justify-center gap-5 bg-[#077b3d] py-3 rounded-lg hover:scale-105 transition"
          >
            {" "}
            <FaShopify  size={22} />  Website {" "}
          </a>{" "}
        
        </div>
      </div>
    </div>
  );
}
