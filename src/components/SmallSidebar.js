import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { toggleSidebar } from "../features/userSlice";
import Wrapper from "../helpers/SmallSidebarSC";

import Navbar from "./Navbar";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
    const { isSidebarOpen } = useSelector(store => store.user);

    const dispatch = useDispatch();

    const closeSidebarHandler = () => {
        dispatch(toggleSidebar())
    }

    
    return (
        <Wrapper>
            <div
                className={
                    isSidebarOpen
                        ? "sidebar-container show-sidebar"
                        : "sidebar-container"
                }
            >
                <button className="close-btn" onClick={closeSidebarHandler}>
                    <FaTimes />
                </button>

                <header>
                    <Navbar />
                </header>

                <NavLinks toggleSidebar={closeSidebarHandler} />
            </div>
        </Wrapper>
    );
};
export default SmallSidebar;
