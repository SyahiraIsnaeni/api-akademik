const pool = require('../database/database');
const queries = require('../query/queries');
const register = require('../register');

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
        res.status(200).json(results.rows);
    })
};

const addDataUser = (req, res) => {
    const {name, email, phone, originPassword, matchPassword} = req.body;
    const registerUser = new register(name, email, phone, originPassword, matchPassword);
    if (registerUser.userValidation() == true){
        pool.query(queries.checkEmailExists, [email], (error, results)=>{
            if (results.rows.length){
                if(error) throw error;
                res.status(400).send("Email telah digunakan");
            }
            pool.query(queries.checkPhoneExists, [phone], (error, results) => {
                    if (results.rows.length){
                        if(error) throw error;
                        res.status(400).send("Phone telah digunakan");
                    }
                    pool.query(
                        queries.addUser,
                        [name, email, phone, originPassword],
                        (error, results) => {
                            if(error) throw error;
                            res.status(200).send("Data berhasil ditambahkan!");
                        }
                    )
                }
            )
        });
    }else{
        res.status(400).send("Gagal Registrasi");
    }
};

module.exports = {
    getDataUsers,
    getDataUserById,
    addDataUser,
};