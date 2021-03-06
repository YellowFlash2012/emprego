import { NavLink } from "react-router-dom";
import links from "../utils/links";


const NavLinks = ({toggleSidebar}) => {
    return (
        <div>
            <div className="nav-links">
                {links.map((link) => {
                    const { text, path, id, icon } = link;

                    return (
                        <NavLink
                            to={path}
                            className={({ isActive }) => {
                                return isActive
                                    ? "nav-link active"
                                    : "nav-link";
                            }}
                            key={id}
                            onClick={toggleSidebar}
                        >
                            <span className="icon">{icon}</span>
                            {text}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};
export default NavLinks;
