import React from "react";
import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";
import FilterDropdown from "./FilterDropdown";

const SearchFilterComponent = ({ projects, category, client }) => {
    return (
        <div className="flex flex-col grid-cols-12 gap-4 lg:gap-8 lg:grid filter-search-section">
            <SearchInput projects={projects} client={client} />
            {client && (
                <>
                    <FilterButton />
                    <FilterDropdown category={category} client={client} />
                </>
            )}
        </div>
    );
};

export default SearchFilterComponent;
