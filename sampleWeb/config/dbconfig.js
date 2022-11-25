/*  DB Info */
module.exports = 
{
    user : process.env.NODE_ORACLEDB_USER || "sysmng",
    password : process.env.NODE_ORACLEDB_PASSWOR || "mng321!@",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "203.225.27.222:1541/KLQA"
}