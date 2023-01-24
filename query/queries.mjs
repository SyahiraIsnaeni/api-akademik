export const getUsers = "SELECT * FROM users";
export const getUserById = "SELECT * FROM users WHERE id = $1";
export const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
export const addUser = "INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4)";