import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Logo from "../../../public/logo.png";
import { motion, useScroll } from "framer-motion";

const PageLayout = ({ children, title, heading, tag }) => {
    const { scrollY } = useScroll();
    const [scrollVal, setScrollVal] = useState();
    const [hidden, setHidden] = useState(false);

    const pos_project = document.getElementById("title")?.offsetTop;

    scrollY.on("change", (y) => {
        setScrollVal(y);
    });

    useEffect(() => {
        if (scrollVal > pos_project) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    }, [scrollVal]);
    return (
        <>
            <Head title={title} />
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
                                    <span className="text-2xl underline font-roboto hover:cursor-pointer">
                                        Home
                                    </span>
                                </Link>
                            </div>
                            <div className="link">
                                <Link href="/about">
                                    <span className="text-2xl underline font-roboto hover:cursor-pointer">
                                        About
                                    </span>
                                </Link>
                            </div>
                            <div className="link">
                                <Link href="/projects/all">
                                    <span className="text-2xl underline font-roboto hover:cursor-pointer">
                                        Projects
                                    </span>
                                </Link>
                            </div>
                            <div className="link">
                                <Link href="/contact">
                                    <span className="text-2xl underline font-roboto hover:cursor-pointer">
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
            {heading && (
                <div className="flex items-center h-full cover md:mr-[18.75rem] md:h-max md:pt-20">
                    <div className="container px-8 pt-20 md:px-0 md:py-0 md:ml-10 cover-item">
                        {heading && (
                            <motion.h1
                                initial={{ translateX: -1000 }}
                                animate={{ translateX: 0 }}
                                transition={{ duration: 1.5, type: "tween" }}
                                className="text-left leading-[0.9]"
                            >
                                {heading}
                            </motion.h1>
                        )}
                        {tag && <div className="mt-4 md:mt-8">{tag}</div>}
                    </div>
                </div>
            )}
            <main>{children}</main>
        </>
    );
};

export default PageLayout;
