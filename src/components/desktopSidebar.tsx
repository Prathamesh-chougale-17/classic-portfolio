"use client";
import { Package2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import ClientSelectRoute from "./clientSelectRoute";
import { routes } from "./globalData";

const MobileSheet = () => {
  return (
    <div className="hidden border-r md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="text-xl">ProFeoNix</span>
          </Link>
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
