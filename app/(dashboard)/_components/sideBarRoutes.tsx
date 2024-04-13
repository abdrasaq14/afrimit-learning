"use client"
import { Compass, Layout } from "lucide-react"
import SideBarItem from "./SideBarItem";

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

]
function SideBarRoutes() {
    const routes = guestRoutes;
    return (
        <div className="flex flex-col w-full">
            {
                routes.map((route, index) => (
                    <SideBarItem key={index} {...route} />
                )
            )
            }
        </div>
  )
}

export default SideBarRoutes