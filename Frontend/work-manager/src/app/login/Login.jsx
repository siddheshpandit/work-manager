"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
    const loginUser=(event)=>{
        event.preventDefault();
        console.log(loginData);
        if(loginData.email.trim()==""){
            toast.info("Please Enter your mail",{
                position:"top-center"
            });
        }
    }

    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    })
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 p-5 shadow-sm">
        <h1 className="text-3xl text-center">Sign Up</h1>
        <form onSubmit={loginUser}>
          <div className="mt-3">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-300 border-gray-400"
              id="user_email"
              name="user_email"
              placeholder="Enter Here"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
              value={loginData.email}
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="user_password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-300 border-gray-400"
              id="user_password"
              name="user_password"
              placeholder="Enter Here"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
              value={loginData.password}
            />
          </div>

          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-800"
            >
              Login
            </button>
            <button
            //   onClick={resetForm}
              type="button"
              className="bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-800 ms-3"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
