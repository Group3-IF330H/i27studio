import { Link } from "@inertiajs/react";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="fixed w-[320px] h-screen py-[64px] bg-[#EEEEEE] Navbar">
            <div className="flex flex-col items-center justify-between h-full items">
                <img src="../logo.png" alt="STUDIO I27 LOGO" className="w-32" />
                <div className="flex flex-col gap-6 text-lg text-center nav-items">
                    <Link href="/">
                        <p className="font-light">Home</p>
                    </Link>
                    <Link href="/about">
                        <p className="font-light">About</p>
                    </Link>
                    <Link href="/services">
                        <p className="font-light">Services</p>
                    </Link>
                    <Link href="/projects">
                        <p className="font-light">Projects</p>
                    </Link>
                    <Link href="/contact">
                        <p className="font-light">Contact</p>
                    </Link>
                </div>
                <div className="flex gap-8 social-media">
                    <div className="ig">
                        <img
                            src="../storage/img/icon/mdi_instagram.svg"
                            alt="STUDIO I27 INSTAGRAM"
                        />
                    </div>
                    <div className="whatsapp">
                        <img
                            src="../storage/img/icon/mdi_whatsapp.svg"
                            alt="STUDIO I27 INSTAGRAM"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
