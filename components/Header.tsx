"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FloatingNav } from "./custom-ui/floating-navbar";
import { IconHome, IconUser, IconMail } from "@tabler/icons-react";

export default function Header() {
  const pathname = usePathname();

  const homeNavItem = pathname === "/home" 
    ? {
        name: "Hero",
        link: "/",
        icon: <IconUser className="h-5 w-5 text-neutral-500 dark:text-white" />,
      }
    : {
        name: "Home",
        link: "/home",
        icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
      };

  const navItems = [
    homeNavItem,
    {
      name: "Email me",
      link: "/email",
      icon: <IconMail className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}