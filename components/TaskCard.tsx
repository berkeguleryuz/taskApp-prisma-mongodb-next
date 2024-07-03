import { Task } from "@prisma/client";
import React from "react";
import Priority from "./Priority";
import Link from "next/link";
import Completion from "./Completion";
import DeleteTask from "./DeleteTask";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="p2 flex items-center space-x-2 cursor-pointer border">
      <Priority task={task} />
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col">
          <Link href={`/edit/${task.id}`}>{task.name}</Link>
        </div>
        <div className="flex items-center space-x-1">
          <Completion task={task} />
          <DeleteTask task={task} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
