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

    return{
        user,
        userValidation,
        userLogout
    };
};

export default useUser