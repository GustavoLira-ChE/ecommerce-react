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
    };

    static userRegistration(name, email, password, userDB){
        const checkEmailInDB = userDB.some(user => user.email === email);
        if(checkEmailInDB){
            return alert('User already registered.');
        } else {
            const newUser = {name: name, email: email, password: password};
            userDB.push(newUser);
            return alert('User  registered.');
        }
    };
};

export default UserServices;