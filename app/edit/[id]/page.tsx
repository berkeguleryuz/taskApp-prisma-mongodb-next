import Box from "@/components/Box";
import TaskForm from "@/components/TaskForm";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const EditTask = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const task = await prisma.task.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!task) {
    redirect("/");
  }
  return (
    <div className="py-6">
      <Box>
        <TaskForm task={task} />
      </Box>
    </div>
  );
};

export default EditTask;
