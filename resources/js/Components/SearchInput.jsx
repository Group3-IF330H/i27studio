import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput = ({ debounce, client }) => {
    return (
        <div
            className={
                `flex items-center gap-4 pb-1 border-b border-gray-900 search-component ` +
                (client ? "lg:col-span-7 col-span-12" : "col-span-12")
            }
        >
            <MagnifyingGlassIcon className="w-5 h-5" />
            <input
                type="text"
                onChange={debounce}
                className="w-full h-full border-none focus:ring-0 bg-[#fafafa]"
                placeholder="Search Project"
            />
        </div>
    );
};

export default SearchInput;
