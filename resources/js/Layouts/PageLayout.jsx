import { Head, Link } from "@inertiajs/react";
import React from "react";
import Logo from "../../../public/logo.png";
import { motion } from "framer-motion";

const PageLayout = ({ children, title, heading, tag }) => {
    return (
        <>
            <Head title={title} />
            <div className="navbar">
                <div className="sidebar z-50 hidden lg:block md:fixed top-0 bottom-0 right-0 w-[18.75rem] overflow-y-auto">
                    <div className="flex flex-col items-end justify-between h-screen px-16 py-20 nav-item">
                        <div className="flex flex-col items-end gap-2 nav-link">
                            <div className="link">
                                <span className="text-4xl underline font-roboto hover:cursor-pointer">
                                    About
                                </span>
                            </div>
                            <div className="link">
                                <span className="text-4xl underline font-roboto hover:cursor-pointer">
                                    Projects
                                </span>
                            </div>
                            <div className="link">
                                <span className="text-4xl underline font-roboto hover:cursor-pointer">
                                    Contact
                                </span>
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
            <div className="flex items-center h-full cover md:mr-[18.75rem] md:h-max md:pb-52 md:pt-20">
                <div className="container px-4 pt-20 md:px-0 md:py-0 md:ml-10 cover-item">
                    <motion.h1
                        initial={{ translateX: -1000 }}
                        animate={{ translateX: 0 }}
                        transition={{ duration: 2, type: "tween" }}
                        className="text-5xl text-left xl:text-[11.25rem] leading-[0.9]"
                    >
                        {heading}
                    </motion.h1>
                    {tag && <div className="mt-4 md:mt-8">{tag}</div>}
                </div>
            </div>
            <main>{children}</main>
        </>
    );
};

export default PageLayout;
