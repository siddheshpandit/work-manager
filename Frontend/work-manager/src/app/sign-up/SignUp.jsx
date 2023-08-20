"use client";

import { addUser } from "@/services/userService";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileUrl:
      "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png",
  });
  const resetForm = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      about: "",
      profileUrl:
        "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png",
    });
  };
  const saveUser = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const result = await addUser(user);
      toast.success("Successfully Registered", {
        position: "top-center",
      });
      setUser({
        name: "",
        email: "",
        password: "",
        about: "",
        profileUrl:
          "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to Register", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 p-5 shadow-sm">
        <h1 className="text-3xl text-center">Sign Up</h1>
        <form onSubmit={saveUser}>
          <div className="mt-3">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-300 border-gray-400"
              id="user_name"
              name="user_name"
              placeholder="Enter Here"
              onChange={(event) => {
                setUser({
                  ...user,
                  name: event.target.value,
                });
              }}
              value={user.name}
            />
          </div>
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
                setUser({
                  ...user,
                  email: event.target.value,
                });
              }}
              value={user.email}
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
                setUser({
                  ...user,
                  password: event.target.value,
                });
              }}
              value={user.password}
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="user_about"
              className="block text-sm font-medium mb-2"
            >
              About
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-300 border-gray-400"
              id="user_about"
              name="user_about"
              placeholder="Enter Here"
              onChange={(event) => {
                setUser({
                  ...user,
                  about: event.target.value,
                });
              }}
              value={user.about}
            ></textarea>
          </div>

          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-800"
            >
              Register
            </button>
            <button
              onClick={resetForm}
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

export default SignUp;
