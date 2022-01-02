const db_conn = require('../config')
const mysql = require('mysql2/promise')

const get_data = async() =>{
    try{
    const mysql_connection = await mysql.createConnection(db_conn)
    let [rows,fields] = await mysql_connection.execute('select * from employee_data')
    //if(rows.count>5)
    return rows;
    }
    catch(e){
        console.log(e)
        return({error:"unable to fetch result from DB"})
    }
    //console.log(fields)
}
const get_data_id = async(id) =>{
    try{
    const mysql_connection = await mysql.createConnection(db_conn)
    let [rows,fields] = await mysql_connection.execute('select * from employee_data where id = ?',[id])
    //if(rows.count>5)
    return rows
    }
    catch(e){
        console.log(e)
        return({error:"unable to fetch result from DB"})
    }
}
module.exports = {get_data,get_data_id}