const express = require('express');
const app = express()
const port = 5123;
const get_data = require('./routes/get_data')
const insert_data = require('./routes/insert_data')
const update_data = require('./routes/update_query')
const delete_data = require('./routes/delete_data')
app.use(get_data)
app.use(insert_data)
app.use(update_data)
app.use(delete_data)
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});