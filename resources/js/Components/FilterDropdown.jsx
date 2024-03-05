import React from "react";
import FilterBySection from "./FilterBySection";
import CloseFilterButton from "./CloseFilterButton";
import SaveFilterButton from "./SaveFilterButton";

const FilterDropdown = ({
    category,
    setIsFilterShown,
    isFilterShown,
    handleCategorySelect,
    handleSaveFilter,
}) => {
    return (
        <div className="grid hidden col-span-12 grid-col-12 filter-dropdown">
            <h1 className="text-4xl font-bold">Filter By</h1>
            <div className="flex flex-col gap-6 pt-4 h-max dropdown">
                <FilterBySection
                    data={category}
                    title="Category"
                    handleCategorySelect={handleCategorySelect}
                />
            </div>
            <div className="flex flex-col gap-4 mt-8 md:flex-row save-filter-button">
                <CloseFilterButton
                    setIsFilterShown={setIsFilterShown}
                    isFilterShown={isFilterShown}
                />
                <SaveFilterButton
                    handleSaveFilter={handleSaveFilter}
                    isFilterShown={isFilterShown}
                    setIsFilterShown={setIsFilterShown}
                />
            </div>
        </div>
    );
};

export default FilterDropdown;
