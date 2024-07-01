import Box from "@/components/Box";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
      </Box>
    </main>
  );
}
