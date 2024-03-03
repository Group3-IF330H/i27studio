import { Link } from "@inertiajs/react";

export default function MobileNavLink({ active, children, href, ...props }) {
    return (
        <Link
            {...props}
            className={
                active
                    ? "text-[#f24d03] font-normal md:text-4xl text-2xl"
                    : "text-black font-light md:text-2xl"
            }
            href={href}
        >
            <div className="flex items-center justify-end gap-10 duration-150 hover:text-[#f24d03] hover:scale-90 hover:duration-150">
                {children}
            </div>
        </Link>
    );
}
