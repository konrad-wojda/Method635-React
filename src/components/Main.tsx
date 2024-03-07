import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { Suspense } from "react";
import { RoutePath } from "./appRouting";
import { Homepage } from "./homepage/Homepage";
import { DarkMode } from "./utils/dark-mode/DarkMode";

export const Main: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <div className="navbar">
                <Navbar />
                <DarkMode />
            </div>
            {location.pathname === RoutePath.root && <Homepage />}
            {/* i can leave here new component for HomepageComponent */}
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};
