"use client";
// import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ClientSelectRoute from "./clientSelectRoute";
import { Button } from "./ui/button";
import { routes } from "./globalData";
import { ModeToggle } from "./toggleTheme";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { ProjectsCombobox } from "./advance-component/search/test-project-combobox";

const DesktopSidebar = () => {
  const pathname = usePathname();
  return (
    <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <div className="hidden">
          <SheetTitle></SheetTitle>
          <SheetHeader></SheetHeader>
          <SheetDescription></SheetDescription>
        </div>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            {routes.map(({ name, href, icon }, index) => (
              <ClientSelectRoute
                key={index}
                name={name}
                href={href}
                icon={icon}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        {pathname === "/projects" && <ProjectsCombobox />}
      </div>
      <ModeToggle />
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default DesktopSidebar;
