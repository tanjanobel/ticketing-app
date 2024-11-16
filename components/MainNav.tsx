import Link from 'next/link';
import ToggleMode from "@/components/ToggleMode";
import MainNavLinks from "@/components/MainNavLinks";

const MainNav = () => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <MainNavLinks />
            </div>
            <div className="flex items-center gap-2">
                <Link href="/">Logout</Link>
                <ToggleMode />
            </div>
        </div>
    );
};

export default MainNav;