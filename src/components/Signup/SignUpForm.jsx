import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../utils/firebase-config";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = state;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      navigate("/");
    }
  });
  return (
    <div className="flex flex-col gap-y-[10px] justify-center items-center mt-[100px]">
      <div className="flex flex-col gap-y-[5px] text-center ">
        <span className="text-[50px] font-bold leading-[60px]">
          Unlimited movies, TV <br /> show, and more.
        </span>
        <span className="text-[25px]">Watch anywhere. Cancel Anytime.</span>
        <span className="text-[25px]">
          Ready to watch?Enter your email to create or restart your membership.
        </span>
      </div>
      <div className="flex text-black ">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={state.email}
          onChange={handleChange}
          className={`${
            showPassword === true ? "w-[350px]" : "w-[500px]"
          } h-[50px] p-[10px] outline-none border-[1px] border-r-[#e50914] }`}
        />
        {showPassword && (
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            className="h-[50px] w-[350px] p-[10px] outline-none"
          />
        )}
        {!showPassword && (
          <button
            className="bg-[#e50914]  px-[17px] py-[7px] w-[200px] text-white  rounded-[3px]"
            onClick={() => setShowPassword(true)}
          >
            Get started
          </button>
        )}
      </div>
      <button
        className="bg-[#e50914]  px-[17px] py-[7px] text-white rounded-[3px] w-[400px]"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUpForm;
