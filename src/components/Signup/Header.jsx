import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
const Header = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full px-[30px] py-[10px]">
      <div className="flex justify-between ">
        <div className="w-[180px]">
          <img src={logo} alt="img" className="w-[100%]" />
        </div>
        <button className="bg-[#e50914]  px-[17px] py-[7px] text-white  rounded-[3px] h-[38px]" onClick={() => navigate('/login')}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
