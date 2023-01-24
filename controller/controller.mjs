import {pool} from "../database/database.mjs";
import {getUsers, addUser, checkEmailExists, getUserById} from "../query/queries.mjs";

export const getDataUsers = (req, res) => {
    pool.query(getUsers, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

export const getDataUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(getUserById, [id], (error, results) => {
        const noUsersfound = !results.rows.length;
        if (noUsersfound){
            res.send("Data tidak ditemukan");
        }
        res.status(200).json(results.rows);
    })
};

export const addDataUser = (req, res) => {
    const {name, email, phone, password} = req.body;
    pool.query(checkEmailExists, [email], (error, results)=>{
        if (results.rows.length){
            res.send("Email telah digunakan");
        }

    pool.query(
        addUser,
        [name, email, phone, password],
        (error, results) => {
            if(error) throw error;
            res.status(200).send("Data berhasil ditambahkan!");
        }
    )
    });
};
