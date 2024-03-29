//add require file and modules
const express=require('express');
const router=express.Router();
const doctors_controller=require('../../../controllers/api/v1/doctors_controller');

//router path for doctor
router.post('/register',doctors_controller.register);
router.post('/login',doctors_controller.login);


module.exports=router;