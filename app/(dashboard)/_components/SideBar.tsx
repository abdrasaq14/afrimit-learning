import { Logo } from "./Logo";
import SideBarRoutes from "./sideBarRoutes";
function SideBar () {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 flex items-center justify-center">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SideBarRoutes />
      </div>
    </div>
  );
}

export default SideBar;
