"use client";
import { createTask } from "@/actions/addTask";
import { updateTask } from "@/actions/updateTask";
import { Task } from "@prisma/client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
  id: z.string().min(2, {
    message: "Id must be at least 2 characters.",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 5 characters.",
  }),
  priority: z.string().min(1, {
    message: "Priority must be selected!",
  }),
});

const TaskForm = ({ task }: { task?: Task }) => {
  const functionAction = task?.id ? updateTask : createTask;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: "",
      name: "",
      description: "",
      priority: "",
    },
  });

  return (
    <div className="p-6">
      <Form {...form}>
        <form
          action={functionAction}
          // onSubmit={() => functionAction}
          className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name of your task"
                    defaultValue={task?.name}
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Description of your task"
                    defaultValue={task?.description || ""}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={task?.priority}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="items-top flex space-x-2">
            <Checkbox
              id="checkbox"
              name="completion"
              defaultChecked={task?.completion === "true"}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="checkbox"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-center items-center flex">
                Completion
              </label>
            </div>
          </div>
          <Button type="submit">
            {task?.id ? "Update Task" : "Create Task"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TaskForm;
