import React from "react";
import useUser from "../hooks/useUser";

const UserContext = React.createContext({});

const UserProvider = ( {children} ) => {
    const userSetting = useUser();
    return(
        <UserContext.Provider value={userSetting}>
            { children }
        </UserContext.Provider>
    );
};

export { UserProvider }
export default UserContext;