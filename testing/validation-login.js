const login = require('../login');
// testing validasi user (sukses)
{
    const user = new login("syahiraisnaeni@gmail.com", "Syahira123")
    console.info(user);
    if(user.userValidation() === true){
        console.info("Login Berhasil");
    }else {
        console.info("Login Gagal");
    }

}