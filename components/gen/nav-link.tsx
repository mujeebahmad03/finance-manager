import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export const NavLink = ({ href, label, isActive }: NavLinkProps) => {
  return (
    <div>
      <Button
        asChild
        size="sm"
        variant="outline"
        className={cn(
          "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
          isActive ? "text-white bg-white/10" : "bg-transparent"
        )}
      >
        <Link href={href} className={isActive ? "text-white" : "text-gray-400"}>
          {label}
        </Link>
      </Button>
    </div>
  );
};
