import { MobileIcon } from "@radix-ui/react-icons";
import { Home, Package, Users } from "lucide-react";

export const routes = [
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