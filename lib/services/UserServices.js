class UserServices {
    static userValidation (email, password, userDB){
        const checkDB = userDB.some(user => user.email === email);
        if(checkDB){
            const checkPasswordInDB = userDB.filter(user => user.email === email);
            if(checkPasswordInDB[0].password == password){
                return {name: checkPasswordInDB[0].name, email: email};       
            } else{
                alert('Wrong Password');
                return {email: null};
            }
        } else{
            alert('Email not found')
            return {email: null};
        }
    }
};

export default UserServices;