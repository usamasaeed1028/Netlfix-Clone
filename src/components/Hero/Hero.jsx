import React from "react";
import backgorundImage from "../../assets/home.jpg";
import homeImg from "../../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute top-0 z-[-1] brightness-75	">
        <div>
          <img src={backgorundImage} alt="image" />
        </div>
      </div>

      <div className="absolute top-[300px] left-[55px]">
        <img src={homeImg} alt="image" />
        <div className="flex gap-x-10">
          <div className="flex gap-x-2 cursor-pointer justify-center items-center border-transparent px-[30px] py-[3px] rounded-sm text-[20px] mt-[70px] bg-white">
            <FaPlay />
            <button onClick={()=> navigate('/player')}>Play</button>
          </div>
          <div className="flex gap-x-2 cursor-pointer justify-center items-center border-transparent px-[30px] py-[3px] rounded-sm text-[20px] mt-[70px] bg-[rgba(109,109,110,0.7)] text-white">
            <BiInfoCircle />
            <button>More Info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
