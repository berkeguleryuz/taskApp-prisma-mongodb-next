"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function updateTask(formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const priority = formData.get("priority")?.toString();
  const completion = formData.get("completion?")?.toString();

  if (!id || !name || !description || !priority || !completion) {
    console.log("Missing fields");
    return new NextResponse("Missing fields: updateTask", { status: 401 });
  }

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      name: name,
      description: description,
      priority: priority,
      completion: completion,
    },
  });

  redirect("/");
}
