"use client";

import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  console.log("Tesing");
  return (
    <nav className="bg-blue-600 h-14 py-2 px-10 flex justify-between items-center text-lg">
      <div>
        <h1 className="text-2xl font-semibold">
          <a href="">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link href={"/"} className="hover:text-blue-50">Home</Link>
          </li>
          <li>
            <Link href={"/add-task"} className="hover:text-blue-50">Add Task</Link>
          </li>
          <li>
            <Link href={"/view-tasks"} className="hover:text-blue-50">View Tasks</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <Link href={"/signup"}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
