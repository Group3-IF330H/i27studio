import { Link } from "@inertiajs/react";
import React from "react";

const CategoryLink = ({ active = false, children, href }) => {
    return (
        <Link
            className={
                "flex flex-col items-center gap-3 category-link w-max hover:border-b-4 border-[#f24c03] duration-150" +
                (active ? " lg:order-none order-first border-none" : "")
            }
            href={href}
        >
            <div
                className={
                    "text-lg category " + (active ? "font-bold" : "font-normal")
                }
            >
                {children}
            </div>
            {active ? (
                <div className="w-2 h-2 dot bg-[#f24c03] rounded-full"></div>
            ) : null}
        </Link>
    );
};

export default CategoryLink;
