const db_conn = require('../config')
const mysql = require('mysql2/promise')

let insert_data = async(data) =>{
    try{
    const mysql_connection = await mysql.createConnection(db_conn)
    let [rows,fields] = await mysql_connection.execute('insert into employee_data (id,employee_name,employee_salary,employee_age,profile_image) values(?,?,?,?,?)',[data.id,data.employee_name,data.employee_salary,data.employee_age,data.profile_image])
    console.log(rows,fields)
    return ({msg:"Data inserted successfully"});
    }
    catch(e){
       // console.log(e)
        return({error:"unable to insert data in DB"})
    }
    //console.log(fields)
}
module.exports = insert_data;