import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";
import FilterDropdown from "./FilterDropdown";
import { useState } from "react";

const SearchFilterComponent = ({
    debounce,
    category,
    handleCategorySelect,
    handleSaveFilter,
}) => {
    const [isFilterShown, setIsFilterShown] = useState(true);

    return (
        <div className="flex flex-col grid-cols-12 gap-4 lg:gap-8 lg:grid filter-search-section">
            <SearchInput debounce={debounce} category={category} />
            {category && (
                <>
                    <FilterButton
                        setIsFilterShown={setIsFilterShown}
                        isFilterShown={isFilterShown}
                    />
                    <FilterDropdown
                        handleCategorySelect={handleCategorySelect}
                        handleSaveFilter={handleSaveFilter}
                        category={category}
                        setIsFilterShown={setIsFilterShown}
                        isFilterShown={isFilterShown}
                    />
                </>
            )}
        </div>
    );
};

export default SearchFilterComponent;
