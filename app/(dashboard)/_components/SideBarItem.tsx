"use client";

import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SideBarItemProps {
  icon: LucideIcon
  label: string
  href: string
}

const SideBarItem = ({ icon: Icon, label, href }: SideBarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname?.startsWith(`${href}/`) ||
    pathname === href;
  const onClick = () => { router.push(href); };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-secondary bg-sky-200/20 hover:bg-sky-200/20 hover:text-secondary"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-secondary")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-secondary h-full transition-all",
          isActive && "opacity-100 "
        )}
      ></div>
    </button>
  );
};

export default SideBarItem;
