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
