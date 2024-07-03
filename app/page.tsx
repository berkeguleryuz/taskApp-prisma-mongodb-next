import Box from "@/components/Box";
import TaskCard from "@/components/TaskCard";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="py-6">
      <Box>
        <div className="flex items-center w-full justify-between">
          <div className="">
            <h1 className="text-xl font-medium text-gray-800">Tasks</h1>
            <p className="font-light text-xs text-gray-400 text-md">
              See all Tasks
            </p>
          </div>
          <Link href={"/new"}>
            <Button>New Task</Button>
          </Link>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <TaskList />
        </Suspense>
      </Box>
    </main>
  );
}

async function TaskList() {
  const tasks = await prisma.task.findMany({});

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border p-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
