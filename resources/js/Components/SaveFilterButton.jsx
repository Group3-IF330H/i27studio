import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const SaveFilterButton = () => {
    return (
        <button className="px-8 py-3 gap-3 text-[#fafafa] bg-[#f24c03] items-center flex">
            <CheckIcon className="w-5 h-5" />
            Save Filter
        </button>
    );
};

export default SaveFilterButton;
