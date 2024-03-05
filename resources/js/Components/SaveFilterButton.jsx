import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const SaveFilterButton = ({
    handleSaveFilter,
    isFilterShown,
    setIsFilterShown,
}) => {
    return (
        <button
            onClick={() => {
                handleSaveFilter();
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
            className="px-8 py-3 gap-3 text-[#fafafa] bg-[#f24c03] items-center flex"
        >
            <CheckIcon className="w-5 h-5" />
            Save Filter
        </button>
    );
};

export default SaveFilterButton;
