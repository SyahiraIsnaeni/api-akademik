class Login{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    userValidation(){
        if (this.email !== null && this.password !== null){
            return true;
        }
        return false
    }
}

module.exports = Login;