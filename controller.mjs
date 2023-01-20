const pool = require('../../db_users');
//const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        const noUsersfound = !results.rows.length;
        if (noUsersfound){
            res.send("Data tidak ditemukan");
        }
        res.status(200).json(results.rows);
    })
};

const addUsers = (req, res) => {
    const {name, email, age, dob} = req.body;
    pool.query(queries.checkEmailExists, [email], (error, results)=>{
        if (results.rows.length){
            res.send("Email telah digunakan");
        }

    pool.query(
        queries.addUsers,
        [name, email, age, dob],
        (error, results) => {
            if(error) throw error;
            res.status(200).send("Data berhasil ditambahkan!");
        }
    )
    });
};

const removeUsers = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUsersById, [id], (error, results) => {
        const noUsersfound = !results.rows.length;
        if (noUsersfound){
            res.send("Data tidak ditemukan");
        }
        pool.query(queries.removeUsers, [id], (error, results) => {
            if(error) throw error;
                res.status(200).send("Data berhasil dihapus.");
        });
    });
};

const updateUsers= (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;

    pool.query(queries.getUsersById, [id], (error, results) => {
        const noUsersfound = !results.rows.length;
        if (noUsersfound){
            res.send("Data tidak ditemukan");
        }
        pool.query(queries.updateUsers, [name, id], (error, results) => {
            if(error) throw error;
                res.status(200).send("Data berhasil diperbarui.");
        });
    });
};

module.exports = {
    getUsers,
    getUsersById,
    addUsers,
    removeUsers,
    updateUsers,
};