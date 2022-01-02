const db_conn = require('../config')
const mysql = require('mysql2/promise')

const update_data = async(data) =>{
    try{
        updateQuery = Object.keys(data)[1]
    const mysql_connection = await mysql.createConnection(db_conn)
    let [rows,fields] = await mysql_connection.execute(`update employee_data set ${updateQuery} = ? where id = ?`,[data[updateQuery],data.id])
    //if(rows.count>5)
    return ({msg:`data of id ${data.id} updated successfully`})
    }
    catch(e){
        console.log(e)
        return({error:"unable to update data in DB"})
    }
}
module.exports = update_data