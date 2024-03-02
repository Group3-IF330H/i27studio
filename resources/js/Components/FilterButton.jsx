import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const FilterButton = ({ setIsFilterShown, isFilterShown }) => {
    return (
        <div className="flex items-center h-full col-span-12 px-2 py-2 border border-gray-900 lg:py-0 lg:col-span-5 filter-component">
            <button
                className="flex items-center gap-4 show-filter-button"
                onClick={() => {
                    document
                        .querySelector(".filter-dropdown")
                        .classList.toggle("hidden");

                    document
                        .querySelector(".minus-icon")
                        .classList.toggle("hidden");

                    document
                        .querySelector(".plus-icon")
                        .classList.toggle("hidden");

                    if (isFilterShown) {
                        document.querySelector(
                            ".show-filter-button h1"
                        ).textContent = "Close Filter";
                        setIsFilterShown(!isFilterShown);
                    } else {
                        document.querySelector(
                            ".show-filter-button h1"
                        ).textContent = "Show Filter";
                        setIsFilterShown(!isFilterShown);
                    }
                }}
            >
                <PlusIcon className="w-5 h-5 plus-icon" />
                <MinusIcon className="hidden w-5 h-5 minus-icon" />
                <h1>Show Filter</h1>
            </button>
        </div>
    );
};

export default FilterButton;
