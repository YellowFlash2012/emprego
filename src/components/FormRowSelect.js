


const FormRowSelect = ({labelText,name,value,handleChange,list}) => {
    return (
        <div>
            <div className="form-row">
                <label htmlFor={name} className="form-label">
                    {labelText || name}
                </label>

                <select
                    name={name}
                    id={name}
                    className="form-select"
                    value={value}
                    onChange={handleChange}
                >
                    {list.map((option, index) => {
                        return (
                            <option value={option} key={index}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};
export default FormRowSelect;
