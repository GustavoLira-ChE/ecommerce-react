import { useState } from "react";
import UserController from "../../lib/controllers/UserController";

const useUser = () => {
    const [user, setUser] = useState({email: null});

    const userValidation = (data) => {
        const validation = UserController.userValidation(data);
        setUser(validation);
    };

    return{
        user,
        userValidation
    };
};

export default useUser