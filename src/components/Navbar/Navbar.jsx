import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut()
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-between items-center p-4 absolute z-[100] w-full">
      <Link to="/">
        <h1 className="text-4xl text-red-600 font-bold cursor-pointer uppercase">
          Netflix
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-4 text-white">Account</button>
          </Link>
          <Link to="/login">
            <button className="bg-red-600 px-6 py-1 rounded text-white cursor-pointer" onClick={handleLogOut}>
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4 text-white">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-1 rounded text-white cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
