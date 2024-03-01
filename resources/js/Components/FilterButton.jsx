import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const FilterButton = () => {
    return (
        <div className="flex items-center col-span-12 px-2 py-2 border border-gray-900 lg:py-0 lg:col-span-5 filter-component">
            <button
                className="flex items-center gap-4"
                onClick={() => {
                    document
                        .querySelector(".filter-dropdown")
                        .classList.toggle("hidden");
                }}
            >
                <PlusIcon className="w-5 h-5" />
                <h1>Show Filter</h1>
            </button>
        </div>
    );
};

export default FilterButton;
