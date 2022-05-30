import Wrapper from "../helpers/JobsSC";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Jobs = ({ _id, company, position,jobLocation, jobType, createdAt, status }) => {
    
    const dispatch = useDispatch();

    const editJobHandler=()=>{}
    const deleteJobHandler = () => {};

    return (
        <Wrapper>
            <header>
                <div className="main-icon">{company.charAt(0)}</div>

                <div className="info">
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>

            <div className="content">
                <div className="content-center">
                    <h4>more content</h4>
                    <div className={`status ${status}`}>{status}</div>
                </div>

                <footer>
                    <div className="actions">
                        <Link to="add-new-job" className="btn edit-btn" onClick={editJobHandler}>edit{""}</Link>
                        
                        <button type="button" className="btn delete-btn" onClick={deleteJobHandler}>delete</button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    );
};
export default Jobs;
