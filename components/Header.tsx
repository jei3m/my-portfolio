"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconFolder, IconMail } from "@tabler/icons-react";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Email me",
      link: "/email",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "Resume",
    //   link: "/contact",
    //   icon: (
    //     <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   ),
    // },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      {/* <DummyContent /> */}
    </div>
  );
}
