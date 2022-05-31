import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartsContainer from "../../components/ChartsContainer";
import StatsContainer from "../../components/StatsContainer";
import { getAllStats } from "../../features/allJobsSlice";


const Stats = () => {
    const dispatch = useDispatch();

    const { isLoading, monthlyApplications } = useSelector(store => store.allJobs);

    useEffect(() => {
        dispatch(getAllStats())
    }, [])
    
    return <div>
        <StatsContainer />
        {monthlyApplications.length > 0 && <ChartsContainer />}
    </div>;
};
export default Stats;
