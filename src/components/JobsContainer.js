import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../features/allJobsSlice";
import Wrapper from "../helpers/JobsContainerSC";
import Jobs from "./Jobs";
import Loading from "./Loading";
import PaginationContainer from "./PaginationContainer";


const JobsContainer = () => {
    const { jobs, isLoading, page, totalJobs, numOfPages } = useSelector(store => store.allJobs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs())
    },[dispatch])

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs to display!</h2>
            </Wrapper>
        )
    }
    return <Wrapper>
        <h5>{ totalJobs} {totalJobs===1? "job":"jobs"} found</h5>

        <div className="jobs">
            {jobs.map((job) => {
                console.log(job);
                return <Jobs key={job._id} {...job}/>
            })}
        </div>
        {numOfPages>1 && <PaginationContainer />}
    </Wrapper>;
};
export default JobsContainer;
