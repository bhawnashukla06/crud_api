const express = require('express');
const router = express.Router(); 
const update_data = require('../models/update_data_model')

router.put('/update_data', async(req, res) => {
let result; 
if(!req.query.id||!(Object.keys(req.query).length==2)){
    res.status(400).send("Mandatory Parameter Missing")
}
result = await update_data(req.query);

if(result.error)
res.status(400).send(result)
else
res.status(200).send(result)
});
module.exports = router