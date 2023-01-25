const pool = require('../database/database');
const queries = require('../query/queries');
const login = require('../login');

const getDataUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getDataUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        const noUsersfound = !results.rows.length;
        if (noUsersfound){
            res.send("Data tidak ditemukan");
        }
        res.status(400).json(results.rows);
    })
};

const checkDataUser = (req, res) => {
    const {email, password} = req.body;
    const loginUser = new login(email, password);
    if (loginUser.userValidation() == true){
    pool.query(queries.checkEmailExists, [email], (error, results)=>{
        if (results.rows.length){
            pool.query(queries.checkPasswordExists, [password], (error, results)=>{
                if (results.rows.length){
                    res.status(200).send("Berhasil Login!");
                }
                
            });
        }else{
            res.status(400).send("Gagal Login!");
        }
        
    });
}else{
    res.status(400).send("Gagal");
}
};

module.exports = {
    getDataUsers,
    getDataUserById,
    checkDataUser,
};