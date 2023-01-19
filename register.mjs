class Register{

    constructor(name, email, phone, password1, password2) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password1 = password1;
        this.password2 = password2;
    }

    userValidation(){
        if (this.name !== null && this.email !== null && this.phone !== null && this.password !== null && this.password2 !== null){
            console.info("validasi berhasil");
            // if (){
            //    pengecekan telepon, email, dan password
            // }
        }else{
            console.info("data harus terisi semua");
        }
    }

    emailValidation(){

    }

    phoneValidation(){
        if(this.phone !== NaN){
            if(this.phone <= 20 && this.phone > 0){
                return true;
            }
        }
        return false;
    }

    passwordValidation(){
        if (this.password.length >= 8){
            if(this.password1 === this.password2){
                return true;
            }
        }
        return false;
    }
}

{
    const user = new Register(null, "syahiraisnaeni@gmail.com", "08889125991", "Syahira123");
    console.info(user);
    user.validasiUser();
}