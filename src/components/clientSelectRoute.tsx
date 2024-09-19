import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { usePathname } from "next/navigation";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const ClientSelectRoute = ({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon:
    | ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
    | ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
}) => {
  const pathname = usePathname();
  return (
    <div>
      {/* 
        <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
        */}
      <Link
        href={href}
        className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
          pathname === href ? "bg-muted" : ""
        }`}
      >
        {React.createElement(
          icon as React.ComponentType<IconProps & RefAttributes<SVGSVGElement>>,
          { className: "h-4 w-4" }
        )}
        {name}
      </Link>
    </div>
  );
};

export default ClientSelectRoute;
