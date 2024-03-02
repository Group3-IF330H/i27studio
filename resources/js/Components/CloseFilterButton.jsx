import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CloseFilterButton = ({ isFilterShown, setIsFilterShown }) => {
    return (
        <button
            className="flex items-center px-8 py-3 gap-3 border-2 text-[#f24c03] border-[#f24c03]"
            onClick={() => {
                document
                    .querySelector(".filter-dropdown")
                    .classList.toggle("hidden");

                document
                    .querySelector(".minus-icon")
                    .classList.toggle("hidden");

                document.querySelector(".plus-icon").classList.toggle("hidden");

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
            <XMarkIcon className="w-5 h-5" />
            Close Filter
        </button>
    );
};

export default CloseFilterButton;
