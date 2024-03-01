import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CloseFilterButton = () => {
    return (
        <button
            className="flex items-center px-8 py-3 gap-3 border-2 text-[#f24c03] border-[#f24c03]"
            onClick={() => {
                document
                    .querySelector(".filter-dropdown")
                    .classList.toggle("hidden");
            }}
        >
            <XMarkIcon className="w-5 h-5" />
            Close Filter
        </button>
    );
};

export default CloseFilterButton;
