const getUsers = "SELECT * FROM registrasi";
const getUserById = "SELECT * FROM registrasi WHERE id = $1";
const checkEmailExists = "SELECT s FROM registrasi s WHERE s.email = $1";
const addUser = "INSERT INTO registrasi (email, nama, no_telp, password) VALUES ($1, $2, $3, $4)";

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
};