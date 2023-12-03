import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "@/Components/Navbar";
import MobileNavbar from "@/Components/MobileNavbar";

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
            <Navbar hidden={hidden} />
            <MobileNavbar />
            {heading && (
                <div className="flex items-center h-full cover md:mr-[18.75rem] md:h-max md:pt-20">
                    <div className="container px-8 pt-32 lg:pt-2 md:px-0 md:py-0 md:ml-10 cover-item">
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
