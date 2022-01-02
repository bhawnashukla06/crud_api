const db_conn = require('../config')
const mysql = require('mysql2/promise')

const delete_data = async(id) =>{
    try{
    const mysql_connection = await mysql.createConnection(db_conn)
    await mysql_connection.execute('delete from employee_data where id = ?',[id])
    //if(rows.count>5)
    return ({msg:`id = ${id} data deleted successfully `})
    }
    catch(e){
        console.log(e)
        return({error:"unable to fetch result from DB"})
    }
}
module.exports=delete_data