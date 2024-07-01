"use server";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function createTask(formData: FormData) {
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const priority = formData.get("priority")?.toString();
  const completion = formData.get("completion")?.toString();

  if (!name || !description || !priority || !completion) {
    console.log("Missing fields");
    return new NextResponse("Missing fields: addTask", { status: 401 });
  }

  const newTask = await prisma.task.create({
    data: {
      name: name,
      description: description,
      priority: priority,
      completion: completion,
    },
  });

  redirect("/");
}
