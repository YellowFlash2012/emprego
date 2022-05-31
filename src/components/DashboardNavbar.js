import Wrapper from "../helpers/NavbarSC";
import {FaAlignLeft, FaCaretDown, FaHome, FaUserCircle} from "react-icons/fa"
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearStore, logoutUser, toggleSidebar } from "../features/userSlice";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
    const [showLogout, setShowLogout] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector(store => store.user);

    if (!user) {
        return <Navigate to="/register" replace />
    }

    const menuToggleHandler = () => {
        dispatch(toggleSidebar())
    }

    const dropDownHandler = () => {
        setShowLogout(!showLogout)
    }
    const logoutHandler = () => {
        dispatch(clearStore())
    }
    
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
