//import Reader from "../utils/Reader";
import UserServices from "../services/UserServices";
import userDB from "../../.usernameAndPassword.js"

class UserController {
    static userValidation(data) {
        const{email, password} = data
        //const userDB = Reader.readJsonFile(".usernameAndPassword.json");
        const validation = UserServices.userValidation(email,password,userDB);
        return validation;
    };
};

export default UserController;