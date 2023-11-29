import React from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    const prev = meta.prev_page_url;
    const next = meta.next_page_url;
    const current = meta.current_page;
    const disabledPrev = prev === null ? true : false;
    const disabledNext = next === null ? true : false;

    return (
        <>
            <div className="flex items-center justify-between mt-8 page-button">
                <Link href={prev} disabled={disabledPrev}>
                    <button
                        className="flex items-center gap-3 py-4 sm:gap-8 sm:px-8 hover:cursor-pointer disabled:opacity-20"
                        disabled={disabledPrev}
                    >
                        <ArrowLeftIcon strokeWidth={2} className="w-8 h-8" />{" "}
                        <span className="sm:text-lg">Prev</span>
                    </button>
                </Link>
                <button className="sm:text-lg">
                    <b>{current}</b>{" "}
                    <span className="mx-3 font-normal">out of</span>{" "}
                    <b>{meta.last_page}</b>
                </button>
                <Link href={next} disabled={disabledNext}>
                    <button
                        className="flex items-center gap-3 py-4 sm:gap-8 sm:px-8 hover:cursor-pointer disabled:opacity-20"
                        disabled={disabledNext}
                    >
                        <span className="sm:text-lg">Next</span>
                        <ArrowRightIcon strokeWidth={2} className="w-8 h-8" />
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Paginator;
