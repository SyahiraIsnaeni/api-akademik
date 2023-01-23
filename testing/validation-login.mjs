import {Login} from "../login.mjs";
// testing semua validasi user (sukses)
{
    const user = new Login("syahiraisnaeni@gmail.com", "Syahira123")
    console.info(user);
    if(user.userValidation() === true){
        console.info("Login Berhasil");
    }else {
        console.info("Login Gagal");
    }

}