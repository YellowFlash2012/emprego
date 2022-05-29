import { useState } from "react";
import { toast } from "react-toastify";
import FormRow from "../components/FormRow";
import Wrapper from "../helpers/RegisterSC";

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true
};

const Register = () => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(`${name}:${value}`);

        setValues({ ...values, [name]: value });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const { name, password, email, isMember } = values;

        if (!email || !password || (!isMember && !name)) {
            console.log("Those fields can NOT be empty");
            toast.error("Those fields can NOT be empty!");
        }
    }

    const isMemberSwitch = () => {
        setValues({ ...values, isMember: !values.isMember })
    };

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmitHandler}>
                <h1 className="logo">Emprego</h1>

                <h3>{values.isMember ? "Login" : "Register"}</h3>

                {!values.isMember && (
                    <FormRow
                        type="text"
                        name="name"
                        value={values.name}
                        handleChange={handleChange}
                    />
                )}

                <FormRow
                    type="email"
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                />

                <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                />

                <button className="btn btn-block">{values.isMember ? "Login" : "Register"}</button>

                <p>
                    {values.isMember?"Not a member yet?":"Already a member?"} {""}
                    <button type="button" onClick={isMemberSwitch} className="member-btn">
                        {values.isMember?"Register":"Login"}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
};
export default Register;
