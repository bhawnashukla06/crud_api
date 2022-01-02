const express = require('express');
const router = express.Router(); 
const delete_data = require('../models/delete_data_model')

router.delete('/delete_data', async(req, res) => {
let result; 
if(!req.query.id){
    res.status(400).send("Mandatory Parameter Missing")
}
result = await delete_data(req.query.id);

if(result.error)
res.status(400).send(result)
else
res.status(200).send(result)
});
module.exports = router