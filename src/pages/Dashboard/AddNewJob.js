import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "../../components/FormRow";
import FormRowSelect from "../../components/FormRowSelect";
import { addJob, clearInputs, handleChange } from "../../features/jobSlice";
import Wrapper from "../../helpers/DashboardFormPage";

const AddNewJob = () => {
    const dispatch = useDispatch();

    const { isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId } = useSelector(store => store.job);

    const addNewJobHandler = (e) => {
        e.preventDefault();

        if (!position || !company || !jobLocation) {
            toast.error("Kindly fill out all those fields!");

            return;
        }

        dispatch(addJob({ position, company, jobLocation, jobType, status }));

    };
    
    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        dispatch(handleChange({name, value}))
        // console.log(name, value);
    }
    
    return <Wrapper>
        <form className="form">
            <h3>{isEditing ? "edit job" : "add new job"}</h3>
            
            <div className="form-center">
                {/* position */}
                <FormRow type="text" name="position" value={position} handleChange={handleInputs} />
                
                {/* company */}
                <FormRow type="text" name="company" value={company} handleChange={handleInputs} />
                
                {/* jobLocation */}
                <FormRow type="text" name="jobLocation" value={jobLocation} labelText="job location" handleChange={handleInputs} />

                {/* status */}
                <FormRowSelect name="status" value={status} handleChange={handleInputs} list={statusOptions} />
                
                {/* jobType */}
                <FormRowSelect name="jobType" labelText="job type" value={jobType} handleChange={handleInputs} list={jobTypeOptions} />

                {/* btn container */}
                <div className="btn-container">
                    <button type="button" className="btn btn-block clear-btn" onClick={()=>dispatch(clearInputs())}>
                        clear
                    </button>
                    <button type="button" className="btn btn-block submit-btn" onClick={addNewJobHandler} disabled={isLoading}>
                        add job
                    </button>
                </div>
            </div>
        </form>
    </Wrapper>;
};
export default AddNewJob;
