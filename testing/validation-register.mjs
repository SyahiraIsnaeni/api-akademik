import {Register} from "../register.mjs";

// Testing Validasi Password (sukses)
{
    const user = new Register("Syahira Isnaeni Dewi", "syahiraisnaeni@gmail.com", "08889125991", "Syahira123","Syahira123");

    console.info(user.passwordValidation());
}

// Testing validasi email (sukses)
{
    const user = new Register("Syahira Isnaeni Dewi", "syahiraisnaeni@gmail.com", "08889125991", "Syahira123","Syahira123");

    console.info(user.emailValidation());
}

// Testing validasi phone (sukses)
{
    const user = new Register("Syahira Isnaeni Dewi", "syahiraisnaeni@gmail.com", "08889125991", "Syahira123","Syahira123");

    console.info(user.phoneValidation());
}


// testing validasi user (sukses)
{
    const user = new Register("Syahira Isnaeni Dewi", "syahiraisnaeni@gmail.com", "08889125991", "Syahira123","Syahira123");
    console.info(user);
    if(user.userValidation() === true){
        console.info("Register Berhasil");
    }else {
        console.info("Register Gagal");
    }

}