import React from "react";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";

function Header() {
    return (
        <div className="flex justify-between items-center p-5 shadow-sm">
            <img src="./assets/logo.svg" width={160} height={100} />
            <Link href="/login">
                <Button>Get started</Button>
            </Link>
        </div>
    );
}

export default Header;
