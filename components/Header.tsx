"use client";
import React from "react";
import { FloatingNav } from "./custom-ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconFolder, IconMail } from "@tabler/icons-react";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/home",
      icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Email me",
      link: "/email",
      icon: <IconMail className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
