import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormRow from "../components/FormRow";
import { userLogin, userRegister } from "../features/userSlice";
import Wrapper from "../helpers/RegisterSC";

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true
};

const Register = () => {
    const [values, setValues] = useState(initialState);

    const dispatch = useDispatch();
    
    const { user, isLoading } = useSelector(store => store.user);
    console.log(user);
    
    if (user) {
        return <Navigate to="/dashboard" replace />
    }
    

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

            return;
        }

        if (isMember) {
            dispatch(userLogin({ email: email, password: password }));
            return;
        };

        dispatch(userRegister({ name, email, password }));
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

                <button className="btn btn-block" disabled={isLoading}>{values.isMember ? "Login" : "Register"}</button>
                
                <button
                    type="button"
                    className="btn btn-block btn-hipster" disabled={isLoading}
                    onClick={()=>dispatch(userLogin({email:"testUser@test.com", password:"secret"}))}
                >
                    {isLoading ? "Loading" : "Demo"}
                </button>

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
