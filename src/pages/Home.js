

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Wrapper from "../helpers/HomeSC";
const Home = () => {
    return (
        <Wrapper>
            <Navbar />

            <div className="container page">
                <div className="info">
                    <h1>job <span>tracking</span> app</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis incidunt illum architecto fuga ab natus non nostrum neque ad.</p>

                    <Link to="/register" className="btn btn-hero">Login/Register</Link>
                </div>

                <img
                    src="images/main.svg"
                    alt="job hunt"
                    className="img main-img"
                />
            </div>
        </Wrapper>
    );
};
export default Home;
