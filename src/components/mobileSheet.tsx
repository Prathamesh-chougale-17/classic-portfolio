"use client";
import { Bell, Home, Package, Package2, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ClientSelectRoute from "./clientSelectRoute";
import { MobileIcon } from "@radix-ui/react-icons";
const routes = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: Users,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: Package,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: MobileIcon,
  },
];
const MobileSheet = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {routes.map(({ name, href, icon }, index) => (
              <ClientSelectRoute
                key={index}
                name={name}
                href={href}
                icon={icon}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileSheet;
