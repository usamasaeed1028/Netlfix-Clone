import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../utils/firebase-config";

const LoginForm = () => {
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
    <div className="flex flex-col gap-y-[10px] justify-center items-center mt-[150px] bg-[#000000b0] w-[35%] mx-auto p-[10px] py-[30px]">
      <div className="flex flex-col gap-y-[25px] text-black ">
        <h1 className="text-white text-center">LOGIN</h1>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={state.email}
          onChange={handleChange}
          className="w-[300px] h-[40px] p-[10px] outline-none border-[1px] border-r-[#e50914]"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="h-[40px] w-[300px] p-[10px] outline-none"
        />
        <button
          className="bg-[#e50914]  px-[17px] py-[7px] text-white rounded-[3px] w-[300px]"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
