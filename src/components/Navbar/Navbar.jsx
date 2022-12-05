import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePoweroff } from "react-icons/ai";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      navigate("/login");
    }
  });

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }
  return (
    <div
      className={` ${colorChange ? "bg-[black] fixed" : ""}
    w-full px-[30px] py-[10px] text-white`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <div className="w-[180px]">
            <img src={logo} alt="img" className="w-[100%]" />
          </div>
          <div className="">
            <ul className="flex gap-x-[25px]">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>My List</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-x-5 ">
          {showSearch && (
            <div>
              <input
                type="text"
                name="search"
                className="border bg-transparent"
              />
            </div>
          )}
          <AiOutlineSearch
            className="cursor-pointer text-[20px]"
            onClick={() => setShowSearch(true)}
          />
          <AiOutlinePoweroff
            className="text-[20px] cursor-pointer"
            onClick={() => signOut(firebaseAuth)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
