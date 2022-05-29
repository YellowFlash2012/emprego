import { Outlet } from "react-router-dom";
import { DashboardNavbar } from "../../components";
import BigSidebar from "../../components/BigSidebar";
import Navbar from "../../components/Navbar";
import SmallSidebar from "../../components/SmallSidebar";
import Wrapper from "../../helpers/SharedLayoutSC";

const SharedLayout = () => {
    return (
        <Wrapper>
            <main className="dashboard">
                <SmallSidebar />

                <BigSidebar />

                <div>
                    <DashboardNavbar />

                    <div className="dashboard-page">
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    );
};
export default SharedLayout;
