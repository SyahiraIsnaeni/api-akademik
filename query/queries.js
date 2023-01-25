const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT FROM users WHERE users.email = $1";
const checkPhoneExists = "SELECT FROM users WHERE users.phone = $1";
const addUser = "INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4)";
const addDataUser = "INSERT INTO users (email, password) VALUES ($1, $2)";
const checkPasswordExists = "SELECT FROM users WHERE users.password = $1";



module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
    addDataUser,
    checkPhoneExists,
    checkPasswordExists
}