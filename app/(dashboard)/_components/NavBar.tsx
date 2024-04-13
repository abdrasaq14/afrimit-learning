import NavBarRoutes from "@/components/customComponent/navBarRoutes";
import MobileNavigation from "./MobileSideBar";

const NavBar = () => {
	return ( 
		<div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
			<MobileNavigation />
			<NavBarRoutes/>
		</div>
	);
};
 
export default NavBar;