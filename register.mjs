export class Register{

    constructor(name, email, phone, originPassword, matchPassword) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.originPassword = originPassword;
        this.matchPassword = matchPassword;
    }

    userValidation(){
        if (this.name !== null && this.email !== null && this.phone !== null && this.originPassword !== null && this.matchPassword !== null){
            if (this.emailValidation()){
                if (this.phoneValidation()){
                    if(this.passwordValidation()){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    emailValidation(){
        let emailArray = this.email.split("");
        for (let i = 0; i < emailArray.length; i++) {
            if (emailArray[i] === '@'){
                return true;
            }
        }
        return false;
    }

    phoneValidation(){
        let phoneArray = this.phone.split("");
        if(this.phone.length > 20 || this.phone.length <= 0){
            return false;
        }
        for (let i = 0; i < phoneArray.length; i++) {
            if (isNaN(Number(phoneArray[i]))){
                return false;
            }
        }
        return true;
    }

    passwordValidation(){
        if (this.originPassword.length >= 8){
            if(this.originPassword === this.matchPassword){
                return true;
            }
        }
        return false;
    }
}