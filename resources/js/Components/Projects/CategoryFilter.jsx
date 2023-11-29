import React from "react";
import CategoryLink from "./CategoryLink";

const CategoryFilter = ({ category }) => {
    console.log(category);
    return (
        <>
            <div className="flex gap-8 mt-16 overflow-x-scroll category-filter">
                <CategoryLink
                    active={route().current("project.category", {
                        category: "all",
                    })}
                    href={route("project.category", { category: "all" })}
                >
                    All
                </CategoryLink>
                {category.map((data, index) => {
                    return (
                        <CategoryLink
                            key={index}
                            active={route().current("project.category", {
                                category: data.nama_category,
                            })}
                            href={route("project.category", {
                                category: data.nama_category,
                            })}
                        >
                            {data.nama_category.charAt(0).toUpperCase() +
                                data.nama_category.slice(1)}
                        </CategoryLink>
                    );
                })}
            </div>
        </>
    );
};

export default CategoryFilter;
