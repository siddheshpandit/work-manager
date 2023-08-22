"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const router=useRouter();
  const context=useContext(UserContext);
  console.log(context);

  const doLogout= async()=>{
    try {
      console.log("Inside logout");
      const result=await logout();
      console.log(result);
      context.setUser(undefined);
      router.push('/')
    } catch (error) {
      console.log(error);
      toast.error("Error Logging out");
    }
  }
  return (
    <nav className="bg-blue-600 h-14 py-2 px-10 flex justify-between items-center text-lg">
      <div>
        <h1 className="text-2xl font-semibold">
          <Link href={"/"}>Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4">
          {
            context.user?(<>
              <li>
              <Link href={"/"} className="hover:text-blue-50">Home</Link>
            </li>
            <li>
              <Link href={"/add-task"} className="hover:text-blue-50">Add Task</Link>
            </li>
            <li>
              <Link href={"/view-tasks"} className="hover:text-blue-50">View Tasks</Link>
            </li>
            </>):<></>
          }
          
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4">
          {
            context.user?(
              <>
              <li>
              <Link href={"/profile/user"}>Siddhesh</Link>
            </li>
            <li>
                <button onClick={doLogout}>Logout</button>
              </li>
              </>
            ):(
              <>
              <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/sign-up"}>Sign Up</Link>
            </li>
              </>
            )
          }
            
              
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
