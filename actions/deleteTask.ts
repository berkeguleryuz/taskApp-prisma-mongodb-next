"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function deleteTask(formData: FormData) {
  try {
    const taskId = formData.get("id")?.toString();
    if (!taskId) {
      return new NextResponse("ID_MISSING: deleteTask", { status: 401 });
    }

    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  } catch (err) {
    console.log(err);
    return new NextResponse("Missing fields: deleteTask", { status: 401 });
  }
  revalidatePath("/");
}
