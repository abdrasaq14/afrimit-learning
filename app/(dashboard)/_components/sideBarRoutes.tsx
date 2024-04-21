"use client";
import SideBarItem from "./SideBarItem";
import { usePathname } from "next/navigation";
import { BarChart, Compass, Layout, List } from "lucide-react";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];
const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

function SideBarRoutes() {
  const pathname = usePathname();
  const isTeacher = pathname?.includes("/teacher");
  const routes = isTeacher ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route, index) => (
        <SideBarItem key={index} {...route} />
      ))}
    </div>
  );
}

export default SideBarRoutes;
