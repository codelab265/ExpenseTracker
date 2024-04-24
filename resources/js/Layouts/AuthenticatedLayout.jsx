import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import SidebarNav from "@/Components/SidebarNav";
import DashboardHeader from "@/Components/DashboardHeader";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="">
            <div className="hidden md:block md:w-64 fixed">
                <SidebarNav auth={user} />
            </div>
            <div className="md:ml-64">
                <DashboardHeader auth={user} />
                {children}
            </div>
        </div>
    );
}
