import { Link } from "react-router-dom";
import Wrapper from "../helpers/ErrorPageSC";

const Error = () => {
    return <Wrapper className="full-page">
        <div>
            <img src="images/not-found.svg" alt="not-found" />

            <h3>Ohh! Page Not Found!</h3>

            <p>We can't seem to find the page you are looking for</p>

            <Link to="/dashboard">Back Home</Link>
</div>
    </Wrapper>;
};
export default Error;
