import type { ReactNode } from "react";
import SideBar from "./_components/SideBar";
import NavBar from "./_components/NavBar";
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full">
        <NavBar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <SideBar />
      </div>
      <main className="pl-56 pt-[80px]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
