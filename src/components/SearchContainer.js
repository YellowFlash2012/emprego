import { useDispatch, useSelector } from "react-redux";
import { clearFilters, handleChange } from "../features/allJobsSlice";
import Wrapper from "../helpers/SearchContainerSC";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";

const SearchContainer = () => {
    const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector(store => store.allJobs);

    const { jobTypeOptions, statusOptions } = useSelector(store => store.job);

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    }

    const clearFiltersHandler = (e) => {
        e.preventDefault()
        dispatch(clearFilters())
    }
    
    return (
        <Wrapper>
            <form className="form">
                <h4>search form</h4>
                <div className="form-center">
                    {/* plain search */}
                    <FormRow
                        type="text"
                        name="search"
                        value={search}
                        handleChange={handleSearch}
                    />

                    {/* search status */}
                    <FormRowSelect
                        labelText="status"
                        name="searchStatus"
                        value={searchStatus}
                        handleChange={handleSearch}
                        list={["all", ...statusOptions]}
                    />

                    {/* search by type*/}
                    <FormRowSelect
                        labelText="type"
                        name="searchType"
                        value={searchType}
                        handleChange={handleSearch}
                        list={["all", ...jobTypeOptions]}
                    />
                    {/* sort */}
                    <FormRowSelect
                        name="sort"
                        value={sort}
                        handleChange={handleSearch}
                        list={sortOptions}
                    />

                    <button className="btn btn-block btn-danger" onClick={clearFiltersHandler}>
                        clear
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};
export default SearchContainer;
