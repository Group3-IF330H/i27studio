import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import MobileNavbar from "@/Components/MobileNavbar";

const PageLayout = ({ children, title, currentPath }) => {
    return (
        <>
            <Head title={title} />
            <Navbar currenPath={currentPath} />
            <MobileNavbar currenPath={currentPath} />
            <div className="grid grid-cols-12 gap-4">
                <div className="h-screen col-span-12 main">{children}</div>
            </div>
        </>
    );
};

export default PageLayout;
