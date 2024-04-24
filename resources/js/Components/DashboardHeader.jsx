import React from "react";
import { LogOut, User, Settings, Mail } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { router } from "@inertiajs/react";
function DashboardHeader({ auth }) {
    return (
        <div className="p-5 bg-white shadow-sm border-b flex justify-between items-center">
            <div className=""></div>
            <div className="">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex items-center gap-2 ">
                            <div className="w-10 h-10 bg-primary text-violet-100 flex items-center justify-center rounded-full ">
                                {auth.name.slice(0, 1)}
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem disabled className="">
                            <User className="mr-2 h-4 w-4" />
                            {auth.name}
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>
                            <Mail className="mr-2 h-4 w-4" />
                            {auth.email}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => router.visit(`/profile`)}
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

export default DashboardHeader;
