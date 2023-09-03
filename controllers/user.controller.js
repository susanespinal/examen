const { pool } = require('../config/db');
const { user_model } = require('../models/user.model');

const getUsers = async (req,res)=>{
    try
    {
        const response = await pool.query('SELECT * FROM usuarios');
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.send("Error: "+error);
    }
};


const getUserById = async(req,res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM usuarios WHERE id = $1',[id]);
    res.json(response.rows);
};

const createUser = async (req,res)=>{
    const {nombre, primerApellido,segundoApellido,cedulaIdentidad,fechaNacimiento} = req.body;
    const response = await pool.query('INSERT INTO usuarios(nombre,primer_apellido,segundo_apellido,cedula_identidad,fecha_nacimiento) VALUES($1, $2, $3, $4, $5)',[nombre, primerApellido,segundoApellido,cedulaIdentidad,fechaNacimiento ]);
    console.log(response);
    res.json({
        message: 'Usuario registrado exitosamente.',
        body:{
            user:{nombre, primerApellido,segundoApellido,cedulaIdentidad,fechaNacimiento}
        }
    });
};

const deleteUser = async(req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM usuarios WHERE id = $1',[id]);
    console.log(response);
    res.json(`El usuario con id ${id} se elimino exitosamente.`);
};

const updateUser = async(req,res) => {
    const id = req.params.id;
    const {nombre, primerApellido,segundoApellido,cedulaIdentidad,fechaNacimiento} = req.body;
    const response = await pool.query('UPDATE usuarios SET nombre = $1,primer_apellido = $2,segundo_apellido = $3,cedula_identidad = $4,fecha_nacimiento = $5  WHERE id = $3',[nombre, primerApellido,segundoApellido,cedulaIdentidad,fechaNacimiento,id]);
    console.log(response);
    res.json('Usuario actualizado satisfactoriamente');
};


const getPromedio = async (req,res)=>{
    try
    { console.log("getPromedio...")
        const response = await pool.query('SELECT AVG(EXTRACT(YEAR FROM AGE(NOW(), fecha_nacimiento))) AS promedio_edades FROM usuarios');
        res.status(200).json({"promedio_edades":response.rows[0]["promedio_edades"]});
    }
    catch(error){
        console.log(error);
        res.send("Error: "+error);
    }
};

const getVersionAPI = async (req,res)=>{
    try
    { console.log("getVersionAPI...")
       
        res.status(200).json({"nameSystem": "api-users", "version": "1.0.0",
            "developer":"Francisco H. Flores Huanca","email": "floreshuancafrancisco@gmail.com"});
    }
    catch(error){
        console.log(error);
        res.send("Error: "+error);
    }
};
module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    getPromedio,
    getVersionAPI
}