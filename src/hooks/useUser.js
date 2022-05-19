import { useState } from "react";
import UserController from "../../lib/controllers/UserController";

const useUser = () => {
    const [user, setUser] = useState({email: null});

    const userValidation = (data) => {
        const validation = UserController.userValidation(data);
        setUser(validation);
    };

    const userLogout = () => {
        setUser({email: null});
    };

    const newUserRegistration = (data) => {
        const validation = UserController.userRegisterSubmit(data);
    }

    return{
        user,
        userValidation,
        userLogout,
        newUserRegistration
    };
};

export default useUser