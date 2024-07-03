import { deleteTask } from "@/actions/deleteTask";
import { Task } from "@prisma/client";
import React from "react";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";

const DeleteTask = ({ task }: { task: Task }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" id="id" value={task.id} />
      <Button type="submit">
        <TrashIcon className="h-4 w-4 hover:text-red-300" />
      </Button>
    </form>
  );
};

export default DeleteTask;
