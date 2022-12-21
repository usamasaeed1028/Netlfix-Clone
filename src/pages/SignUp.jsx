import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {user, signUp} = UserAuth();

  const handleChangeEmail = (e) => {
        setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await signUp(email,password)
        navigate("/");
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        className="h-full w-full absolute object-cover bg-black/60"
        alt="img"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-24">
            <h1 className="text-2xl font-bold">SignUp</h1>
            <form className="w-full flex flex-col gap-y-[15px] mt-[10px]" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="p-2 bg-gray-700 rounded"
                value={email}
                onChange={handleChangeEmail}
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 bg-gray-700 rounded"
                value={password}
                onChange={handleChangePassword}
              />
              <button className="bg-red-600 rounded px-5 py-2">SignUp</button>
              <div className="flex justify-between items-center mt-[10px] text-gray-600">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remeber me
                </p>
                <p>Need help?</p>
              </div>
              <p className="mt-[10px]">
                <span className="text-gray-600 mr-2">
                  Already subscribed to netflix?
                </span>
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
