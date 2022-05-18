class UserServices {
    static userValidation (email, password, userDB){
        const checkDB = userDB.some(user => user.email === email);
        if(checkDB){
            const checkPasswordInDB = userDB.filter(user => user.email === email);
            if(checkPasswordInDB[0].password == password){
                return {email: email};       
            } else{
                return alert('Wrong Password');
            }
        } else{
            return alert('Email not found');
        }
    }
};

export default UserServices;