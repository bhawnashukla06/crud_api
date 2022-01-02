const express = require('express');
const router = express.Router(); 
const {get_data, get_data_id} = require('../models/get_data_model')

router.get('/get_data', async(req, res) => {
let result; 
if(req.query.id){
//console.log(req.query.id)
result = await get_data_id(req.query.id);
}
else{
result = await get_data();
}
if(result.error)
res.status(400).send(result)
else

res.status(200).send(result)
});
module.exports = router