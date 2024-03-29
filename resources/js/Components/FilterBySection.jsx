import React from "react";

const FilterBySection = ({ data, title, handleCategorySelect }) => {
    return (
        <div className={`${data}-filter`}>
            <div className="text-xl filter-title text-[#f24c03]">
                <h1>{title}</h1>
            </div>
            <div className="flex flex-wrap gap-4 pt-3 dropdown-list">
                {data.map((data, index) => (
                    <div
                        className="flex items-center gap-3 checkbox"
                        key={index}
                    >
                        <input
                            type="checkbox"
                            className="apperance-none checked:bg-[#f24c03] active:bg-[#f24c03] focus:bg-[#f24c03] focus:ring-[#f24c03] text-[#f24c03] w-6 h-6"
                            id={data.id}
                            name={data.nama_client || data.nama_category}
                            onChange={() =>
                                handleCategorySelect(data.nama_category)
                            }
                        />
                        <label htmlFor={data.nama_ + title.toLowerCase()}>
                            {data.nama_client || data.nama_category}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterBySection;
