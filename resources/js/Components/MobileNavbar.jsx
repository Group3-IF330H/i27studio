import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../../public/logo.png";
import { Link } from "@inertiajs/react";

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const variant = isOpen ? "opened" : "closed";

    const text = {
        closed: {
            opacity: 0,
            translateX: -150,
        },
        opened: {
            opacity: 1,
            translateX: 0,
        },
    };

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

    //toggle navlink hidden
    const toggleNav = () => {
        const menu = document.getElementById("menu");
        if (menu) {
            menu.classList.toggle("hidden");
        }
    };

    return (
        <>
            <div
                className="lg:hidden flex justify-between items-center fixed z-[100] bg-white py-3 px-5 w-full mobileNavbar shadow-xl"
                id="mobileNav"
            >
                <div className="logo">
                    <img src={Logo} alt="logo" className="w-10" />
                </div>
                <div className="nama">
                    <h1>i27studio</h1>
                </div>
                <div className="menu">
                    <svg
                        viewBox="-20 25 120 20"
                        width="45"
                        height="45"
                        className="text-center duration-1000 bg-white"
                        onClick={() => {
                            setIsOpen(!isOpen);
                            toggleNav();
                        }}
                    >
                        <motion.rect
                            initial={"closed"}
                            animate={variant}
                            variants={top}
                            width="80"
                            height="10"
                            rx="10"
                            fill="#f24c03"
                        ></motion.rect>
                        <motion.rect
                            initial={"closed"}
                            animate={variant}
                            variants={center}
                            y="30"
                            width="80"
                            height="10"
                            rx="10"
                            fill="#f24c03"
                        ></motion.rect>
                        <motion.rect
                            initial={"closed"}
                            animate={variant}
                            variants={bottom}
                            y="60"
                            width="80"
                            height="10"
                            rx="10"
                            fill="#f24c03"
                        ></motion.rect>
                    </svg>
                </div>
            </div>
            <motion.div
                initial={"closed"}
                animate={variant}
                variants={text}
                className={
                    "w-full mobileNavLinks z-[5000] mt-12 " +
                    (isOpen ? "fixed" : "hidden")
                }
                id="mobileNavLinks"
            >
                <motion.div
                    initial={"closed"}
                    animate={variant}
                    variants={text}
                    transition={{ delay: 0.2 }}
                    className="bg-white links1"
                    id="mobileHomeLink"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <Link href="/">
                        <p className="p-10 text-2xl font-bold text-center underline">
                            Home
                        </p>
                    </Link>
                </motion.div>
                <motion.div
                    initial={"closed"}
                    animate={variant}
                    variants={text}
                    transition={{ delay: 0.7 }}
                    className="bg-white links2"
                    id="mobileHomeLink"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <Link href={route("about")}>
                        <p className="p-10 text-2xl font-bold text-center underline">
                            About
                        </p>
                    </Link>
                </motion.div>
                <motion.div
                    initial={"closed"}
                    animate={variant}
                    variants={text}
                    transition={{ delay: 1.1 }}
                    className="bg-white links2"
                    id="mobileHomeLink"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <Link href={route("project.category", { category: "all" })}>
                        <p className="p-10 text-2xl font-bold text-center underline">
                            Projects
                        </p>
                    </Link>
                </motion.div>
                <motion.div
                    initial={"closed"}
                    animate={variant}
                    variants={text}
                    transition={{ delay: 1.5 }}
                    className="bg-white links3"
                    id="mobileHomeLink"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <Link href={route("contact")}>
                        <p className="p-10 text-2xl font-bold text-center underline">
                            Contact
                        </p>
                    </Link>
                </motion.div>
            </motion.div>
        </>
    );
};

export default MobileNavbar;
