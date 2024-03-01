import React, { useState, useMemo, useEffect } from "react";
import { debounce } from "lodash";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput = ({ projects, client }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    if (searchTerm !== "") {
        projects = projects.filter((project) => {
            return project.nama_project
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        });
    }

    let debouncedResults = useMemo(() => {
        return debounce(handleChange, 700);
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

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
                onChange={debouncedResults}
                className="w-full h-full border-none focus:ring-0 bg-[#fafafa]"
                placeholder="Search Project"
            />
        </div>
    );
};

export default SearchInput;
