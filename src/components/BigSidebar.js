import { useSelector } from "react-redux";
import Wrapper from "../helpers/BigSidebarSC";
import Navbar from "./Navbar";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
    const { isSidebarOpen } = useSelector(store=>store.user);

    return (
        <Wrapper>
            <div
                className={
                    isSidebarOpen
                        ? "sidebar-container "
                        : "sidebar-container show-sidebar"
                }
            >
                <div className="content">
                    <header>
                        <Navbar />
                    </header>

                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
};
export default BigSidebar;
