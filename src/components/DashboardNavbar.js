import Wrapper from "../helpers/NavbarSC";
import {FaAlignLeft, FaCaretDown, FaHome, FaUserCircle} from "react-icons/fa"
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/userSlice";
import { useState } from "react";

const DashboardNavbar = () => {
    const [showLogout, setShowLogout] = useState(false);

    const dispatch = useDispatch();

    const { user } = useSelector(store => store.user);

    const menuToggleHandler = () => {
        dispatch(toggleSidebar())
    }

    const dropDownHandler = () => {
        setShowLogout(!showLogout)
    }
    const logoutHandler=()=>{}
    
    return <Wrapper>
        <div className="nav-center">
            <button type="button" className="toggle-btn" onClick={menuToggleHandler}>
                <FaAlignLeft />
            </button>

        <div>

            <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
            <button type="button" className="btn" onClick={dropDownHandler}>
                <FaUserCircle />

                {user.name}

                <FaCaretDown />
            </button>

            <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
                <button type="button" className="dropdown-btn" onClick={logoutHandler}>
logout
                </button>
        </div>
            </div>
        </div>
    </Wrapper>;
};
export default DashboardNavbar;
