import React, { useState } from "react";
import { login } from "../service/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      localStorage.setItem("token", res.token);
      toast.success("Login successfully");
      navigate("/users");
    } catch (error) {
      console.log("error in login : ", error);

      toast.error("Login failed please check your credentials");
    }
  };
  return (
    <div className="p-5">
      <h1 className="text-center font-semibold my-5 text-4xl">Login</h1>
      <form
        onSubmit={handleLogin}
        className="shadow-xl md:w-1/2 mx-auto mt-5 p-5 rounded-md flex flex-col gap-5"
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="w-full border p-3 rounded my-5 border-blue-500 outline-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 my-5 border border-blue-500 outline-0"
            required
          />
        </div>
        <motion.button
          className="bg-blue-500 p-2 rounded text-white"
          whileTap={{ scale: 0.9 }}
        >
          Login
        </motion.button>
      </form>
    </div>
  );
};

export default Login;
