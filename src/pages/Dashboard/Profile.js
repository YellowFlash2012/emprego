import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "../../components/FormRow";
import Wrapper from "../../helpers/DashboardFormPage";

const Profile = () => {
    const { isLoading, user } = useSelector(store => store.user);

    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        lastName: user?.lastName || "",
        location: user?.location || "",
    });

    const updateProfileHandler = (e) => {
        e.preventDefault();

        const { name, email, lastName, location } = userData;

        if (!name || !email || !lastName || !location) {
            toast.error('kindly fill out all the fields');
        };
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value });
    }

    return (
        <Wrapper>
            <form className="form" onSubmit={updateProfileHandler}>
                <h3>profile</h3>
                <div className="form-center">
                    <FormRow
                        type="text"
                        name="name"
                        value={userData.name}
                        handleChange={handleChange}
                    />

                    <FormRow
                        type="text"
                        labelText="last name"
                        name="lastName"
                        value={userData.lastName}
                        handleChange={handleChange}
                    />

                    <FormRow
                        type="email"
                        name="email"
                        value={userData.name}
                        handleChange={handleChange}
                    />

                    <FormRow
                        type="text"
                        name="location"
                        value={userData.location}
                        handleChange={handleChange}
                    />

                    <button type="submit" className="btn btn-block" disabled={isLoading}>
                        {isLoading ? "Please wait..." : "update profile"}
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};
export default Profile;
