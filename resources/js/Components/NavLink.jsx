import { Link } from "@inertiajs/react";

export default function NavLink({ active, children, href, ...props }) {
    return (
        <Link
            {...props}
            className={
                active
                    ? "text-[#f24d03] font-normal text-2xl"
                    : "text-black font-light "
            }
            href={href}
        >
            <div className="flex items-center justify-center gap-10 duration-150 hover:text-[#f24d03] hover:scale-90 hover:duration-150">
                {children}
            </div>
        </Link>
    );
}
