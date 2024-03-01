import React from "react";
import FilterBySection from "./FilterBySection";
import CloseFilterButton from "./CloseFilterButton";
import SaveFilterButton from "./SaveFilterButton";

const FilterDropdown = ({ category, client }) => {
    return (
        <div className="grid hidden col-span-12 grid-col-12 filter-dropdown">
            <h1 className="text-4xl font-bold">Filter By</h1>
            <div className="flex flex-col gap-6 pt-4 h-max dropdown">
                <FilterBySection data={category} title="Category" />
                <FilterBySection data={client} title="Client" />
            </div>
            <div className="flex gap-4 mt-8 save-filter-button">
                <CloseFilterButton />
                <SaveFilterButton />
            </div>
        </div>
    );
};

export default FilterDropdown;
