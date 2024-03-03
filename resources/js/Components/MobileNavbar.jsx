import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import MobileNavLink from "./MobileNavLink";

const MobileNavbar = ({ currenPath }) => {
    const [isOpen, setIsOpen] = useState(false);
    const variant = isOpen ? "opened" : "closed";

    console.log(isOpen);

    const top = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: 45,
            translateY: 30,
        },
    };

    const center = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };

    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: -45,
            translateY: -30,
        },
    };

    return (
        <>
            <div className="fixed w-full px-8 py-[20px] mobile-navbar lg:hidden md:px-12 z-40 bg-white shadow-md">
                <div className="flex justify-between navbar ">
                    <div className="flex items-center gap-4 nama-logo">
                        <img
                            src="../logo.png"
                            alt="Studio I27 Logo"
                            className="h-5"
                        />
                        <h1 className="">Studio I27</h1>
                    </div>
                    <div className="menu">
                        <svg
                            viewBox="-20 25 120 20"
                            width="40"
                            height="40"
                            className="text-center duration-1000 rounded-lg"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <motion.rect
                                initial={"closed"}
                                animate={variant}
                                variants={top}
                                width="80"
                                height="10"
                                rx="10"
                            ></motion.rect>
                            <motion.rect
                                initial={"closed"}
                                animate={variant}
                                variants={center}
                                y="30"
                                width="80"
                                height="10"
                                rx="10"
                            ></motion.rect>
                            <motion.rect
                                initial={"closed"}
                                animate={variant}
                                variants={bottom}
                                y="60"
                                width="80"
                                height="10"
                                rx="10"
                            ></motion.rect>
                        </svg>
                    </div>
                </div>
            </div>
            <div
                className={
                    `fixed flex flex-col z-50 px-8 mt-[75px] w-[60%] md:w-full right-0 h-screen bg-white md:px-12 nav-items ` +
                    (isOpen ? "" : "hidden")
                }
            >
                <div className="flex flex-col gap-10 pt-5 pb-10 nav-link h-max">
                    <MobileNavLink
                        href="/clients"
                        active={currenPath === "clients"}
                    >
                        Clients
                    </MobileNavLink>
                    <MobileNavLink
                        href="/about"
                        active={currenPath === "about"}
                    >
                        About
                    </MobileNavLink>
                    <MobileNavLink href="/" active={currenPath === "home"}>
                        Home
                    </MobileNavLink>
                    <MobileNavLink
                        href="/projects/all"
                        active={currenPath === "projects"}
                    >
                        Projects
                    </MobileNavLink>
                    <MobileNavLink
                        href="/contact"
                        active={currenPath === "contact"}
                    >
                        Contact
                    </MobileNavLink>
                </div>
                <div className="copyright">
                    <p className="text-end text-xs text-[#f24d03]">
                        Copyright &copy; I27 Studio.
                        <br />
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;
