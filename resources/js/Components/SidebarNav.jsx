import React from "react";

import {
    LayoutGrid,
    PiggyBank,
    ReceiptText,
    ShieldCheck,
    LogOut,
    User,
    Settings,
    Mail,
} from "lucide-react";
import { Link, router, usePage } from "@inertiajs/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function SidebarNav({ auth }) {
    const { url } = usePage();

    const MenuList = [
        {
            id: 1,
            title: "Dashboard",
            route: "/dashboard",
            icon: LayoutGrid,
        },
        {
            id: 2,
            title: "Budget",
            route: "/dashboard/budget",
            icon: PiggyBank,
        },
        {
            id: 3,
            title: "Expenses",
            route: "/expenses",
            icon: ReceiptText,
        },
        {
            id: 4,
            title: "Upgrade",
            route: "/update",
            icon: ShieldCheck,
        },
    ];
    return (
        <div className="h-screen p-5 border shadow-sm flex flex-col">
            <div className="flex-grow">
                <div className="p-5">
                    <img src="/assets/logo.svg" width={160} height={100} />
                </div>
                <div className="mt-5 space-y-2">
                    {MenuList.map((item) => (
                        <Link
                            key={item.id}
                            href={item.route}
                            className={`flex items-center p-5 text-gray-700 rounded-lg hover:bg-violet-100 hover:text-primary transition-all duration-300 font-medium ${
                                url === item.route
                                    ? "bg-violet-100 text-primary"
                                    : ""
                            }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="ml-3">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="px-5">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex items-center gap-2 ">
                            <div className="w-10 h-10 bg-primary text-violet-100 flex items-center justify-center rounded-full ">
                                {auth.name.slice(0, 1)}
                            </div>
                            <span>Profile</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem disabled>
                            <User className="mr-2 h-4 w-4" />
                            {auth.name}
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>
                            <Mail className="mr-2 h-4 w-4" />
                            {auth.email}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => router.visit("/profile")}
                        >
                            <Settings className="mr-2 h-4 w-4" />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => router.post("/logout")}
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}

export default SidebarNav;
