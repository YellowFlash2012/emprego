import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "../../components/FormRow";
import Wrapper from "../../helpers/DashboardFormPage";

const AddNewJob = () => {
    const { isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId } = useSelector(store => store.job);

    const addNewJobHandler = (e) => {
        e.preventDefault();

        if (!position || !company || !jobLocation) {
            toast.error("Kindly fill out all those fields!");

            return;
        }
    };

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, value);
    }

    const clearInputFieldsHandler = () => { };
    
    
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

                <div className="btn-container">
                    <button type="button" className="btn btn-block clear-btn" onClick={clearInputFieldsHandler}>
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
