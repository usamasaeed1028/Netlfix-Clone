import React from "react";
import video from "../assets/zoom_0.mp4";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] w-[100vw]">
      <AiOutlineArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />
      <div className="h-[100vh] w-[100vw]">
        <video src={video} autoPlay loop controls></video>
      </div>
    </div>
  );
};

export default Player;
