import { Task } from "@prisma/client";
import React from "react";

const Priority = ({ task }: { task: Task }) => {
  const getColorClass = () => {
    switch (task.priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div
      className={`h-full p-1 flex flex-col justify-center items-center ${getColorClass()}`}>
      <p className="text-sm font-bold text-gray-800">{task.priority[0]}</p>
      <p className="text-sm font-bold text-gray-800">{task.priority[1]}</p>
      <p className="text-sm font-bold text-gray-800">{task.priority[2]}</p>
      <p className="text-sm font-bold text-gray-800">{task.priority[3]}</p>
      <p className="text-sm font-bold text-gray-800">{task.priority[4]}</p>
      <p className="text-sm font-bold text-gray-800">{task.priority[5]}</p>
      <p className="text-sm font-bold text-gray-800">{task.priority[6]}</p>
    </div>
  );
};

export default Priority;
