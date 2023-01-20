class Register{

    constructor(name, email, phone, originPassword, matchPassword) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.originPassword = originPassword;
        this.matchPassword = matchPassword;
    }

    userValidation(){
        if (this.name !== null && this.email !== null && this.phone !== null && this.originPassword !== null && this.matchPassword !== null){
            if (this.phoneValidation() === true){
                if(this.passwordValidation() === true){
                    return true;
                }
            }
        }
        return false;
    }

    emailValidation(){

    }

    phoneValidation(){
        let temp = parseInt(this.phone);
        if(temp !== NaN){
            if(this.phone <= 20 && this.phone > 0){
                return true;
            }
        }
        return false;
    }

    passwordValidation(){
        if (this.originPassword.length >= 8){ //masih ada yg perlu direvisi
            if(this.originPassword === this.matchPassword){
                return true;
            }
        }
        return false;
    }
}

{
    const user = new Register("Syahira Isnaeni Dewi", "syahiraisnaeni@gmail.com", "08889125991", "Syahira123","Syahira123");
    console.info(user);
    if(user.userValidation() === true){
        console.info("Register Berhasil");
    }else {
        console.info("Register Gagal");
    }

}