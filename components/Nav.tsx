import React from "react";
import Box from "./Box";
import Image from "next/image";
import HeadingText from "./HeadingText";

const Nav = () => {
  return (
    <nav className="py-6">
      <Box>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <HeadingText
          title={"Task Demo App"}
          description={"MongoDB / Prisma / Next.js"}
        />
      </Box>
    </nav>
  );
};

export default Nav;

export function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Box>{children}</Box>
    </li>
  );
}
