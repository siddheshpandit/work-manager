"use client";
import { addTask } from "@/services/taskService";
import React, { useState } from "react";
import {toast} from 'react-toastify';

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "64df286eb5a123af69fa6656",
  });
  const formSubmit= async (event)=>{
    event.preventDefault();
    console.log(task);
    try {
      const result=await addTask(task);
      toast.success("Task Added Successfully",{
        position:"top-center"
      });
      console.log(result);

      setTask({
          title: "",
          content: "",
          status: "none",
      })
    } catch (error) {
      console.log(error);
      toast.error("Failed Adding Task",{
        position:"top-center"
      })
    }
  }
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 p-5 shadow-sm">
        <h1 className="text-3xl text-center">Add Your Tasks Here</h1>
        <form onSubmit={formSubmit}>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-400 focus:ring-gray-300 border-gray-400"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-400 focus:ring-gray-300 border-gray-400"
              id="task_content"
              rows={4}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-3 rounded-3xl bg-gray-400 focus:ring-gray-300 border-gray-400"
              name="task_status"
              onChange={(event)=>{
                setTask({
                  ...task,status:event.target.value
                })
              }}
              value={task.status}
            >
              <option value="none" disabled>
                Select Status..
              </option>
              <option value="Pending">Pending</option>
              <option value="Not Started">Not Started</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="mt-5 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add Task
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
