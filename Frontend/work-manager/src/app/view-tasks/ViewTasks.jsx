"use client";
import UserContext from "@/context/userContext";
import { getTasksByUserId } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";

const ViewTasks = () => {
  const context = useContext(UserContext);
  const [tasks, setTasks] = useState([]);
  async function loadTasks(userId) {
    try {
      const tasks = await getTasksByUserId(userId);
      setTasks([...tasks]);
      // console.log(tasks);
    } catch (error) {}
  }
  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3">Your Tasks ({tasks.length})</h1>
        {tasks.map((task) => (
          <Task task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
};

export default ViewTasks;
