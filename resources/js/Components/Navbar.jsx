import { Link } from "@inertiajs/react";
import React from "react";
import Logo from "../../../public/logo.png";

const Navbar = ({ hidden }) => {
    return (
        <div className="navbar">
            <div
                className={
                    "sidebar z-[100] hidden lg:block duration-500 sm:fixed top-0 bottom-0 w-[18.75rem] overflow-y-auto " +
                    (hidden ? "-right-64" : "right-0")
                }
            >
                <div className="flex flex-col items-end justify-between h-screen px-16 py-20 nav-item">
                    <div className="flex flex-col items-end gap-1 nav-link">
                        <div className="link">
                            <Link href="/">
                                <span className="text-2xl underline font-roboto hover:cursor-pointer hover:text-[#f24c03] hover:text-3xl duration-300">
                                    Home
                                </span>
                            </Link>
                        </div>
                        <div className="link">
                            <Link href="/about">
                                <span className="text-2xl underline font-roboto hover:cursor-pointer hover:text-[#f24c03] hover:text-3xl duration-300">
                                    About
                                </span>
                            </Link>
                        </div>
                        <div className="link">
                            <Link href="/projects/all">
                                <span className="text-2xl underline font-roboto hover:cursor-pointer hover:text-[#f24c03] hover:text-3xl duration-300">
                                    Projects
                                </span>
                            </Link>
                        </div>
                        <div className="link">
                            <Link href="/contact">
                                <span className="text-2xl underline font-roboto hover:cursor-pointer hover:text-[#f24c03] hover:text-3xl duration-300">
                                    Contact
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="nav-logo">
                        <Link href="/">
                            <img src={Logo} className="w-20" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
