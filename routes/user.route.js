const { Router} =  require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUser, updateUser,getPromedio,getVersionAPI } = require('../controllers/user.controller.js');


router.get('/usuarios/promedio-edad',getPromedio);
router.get('/usuarios',getUsers);
router.get('/usuarios/:id',getUserById);
router.post('/usuarios',createUser);
router.delete('/usuarios/:id',deleteUser);
router.put('/usuarios/:id',updateUser);
router.get('/estado',getVersionAPI);


module.exports = router;