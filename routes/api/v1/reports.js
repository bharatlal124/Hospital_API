//add imp modules and files here
const express=require('express');
const router=express.Router();
const reports_controller=require('../../../controllers/api/v1/reports_controllers');

//Router path for report
router.get('/:status',reports_controller.fetchReports);

module.exports=router;