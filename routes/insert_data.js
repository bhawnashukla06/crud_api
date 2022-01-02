const express = require('express'); 
const router = express.Router();
const insert_data = require('../models/insert_data_model.js')

router.post('/insert_data',async(req,res)=>{
    //console.log(req.query)
if(!req.query.id||!req.query.employee_name){
res.status(400).send("Mandatory parameter missing")
}

// if(req.query.employee_salary){

// }
result = await insert_data(req.query)
if(result.error)
res.status(400).send(result)
else
res.status(200).send(result)
})
module.exports = router;