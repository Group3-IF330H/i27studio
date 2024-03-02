import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";
import FilterDropdown from "./FilterDropdown";

const SearchFilterComponent = ({ debounce, category, handleChange }) => {
    return (
        <div className="flex flex-col grid-cols-12 gap-4 lg:gap-8 lg:grid filter-search-section">
            <SearchInput debounce={debounce} category={category} />
            {category && (
                <>
                    <FilterButton />
                    <FilterDropdown
                        category={category}
                        handleChange={handleChange}
                    />
                </>
            )}
        </div>
    );
};

export default SearchFilterComponent;
