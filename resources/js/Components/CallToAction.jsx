import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

const CallToAction = ({ text, href }) => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [isHover, setIsHover] = useState(false);

    const size = isHover ? 100 : 0;

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorX(e.clientX);
            setCursorY(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <Link
            href={href}
            className="relative flex items-center justify-center h-screen"
        >
            <motion.span
                animate={{
                    WebkitMaskPosition: `${cursorX - size / 2}px  ${
                        cursorY - size / 2
                    }px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut" }}
                className="fixed w-full h-full text-white link-mask xl:text-[8rem] call-to leading-relaxed flex items-center justify-center text-center uppercase md:text-8xl text-6xl pb-3 px-8"
            >
                <p
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className="underline"
                >
                    {text}
                </p>
            </motion.span>

            <div className="xl:text-[8rem]  call-to leading-relaxed flex justify-center text-center uppercase md:text-8xl text-6xl pb-3 px-8">
                <span className="underline link-text underline-offset-8">
                    {text}
                </span>
            </div>

            <div className="absolute flex flex-col gap-1 font-normal text-center bottom-3">
                <span className="font-bold opacity-30 text-md">
                    Copyright &copy; i27studio. All Rights Reserved.
                </span>{" "}
            </div>
        </Link>
    );
};

export default CallToAction;
