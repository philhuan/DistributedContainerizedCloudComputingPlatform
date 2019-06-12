const query=require('../util/mysql');

const table='flow';

//获取所有流程信息
async function listFlow() {
    let sql = `select * from ${table},container WHERE ${table}.cid=container.cid`;
    console.log(sql)
    let result = await query(sql, []);
    return result;
}

//插入新流程
async function insertFlow(data){
    let sql=`insert into ${table} (cid,param,result,lable,fstate) values (?,?,?,?,?)`;
    let result=await query(sql,data);
    return result;
}

//通过fid流程
async function deleteFlow(data){
    let sql=`delete from ${table} where uid=?`;
    let result=await query(sql,data);
    return result;
}

//通过fid修改流程状态
async function updateFlow(data){
    let sql=`UPDATE ${table} set fstate=? WHERE fid=?`;
    let result=await query(sql,data);
    return  result;
}
//通过fid修改计算结果
async function updateResult(data){
    let sql=`UPDATE ${table} set result=? ,fstate=? WHERE fid=?`;
    let result=await query(sql,data);
    return  result;
}

//通过fid查找结果
async function getById(data){
    let sql = `select * from ${table},container WHERE ${table}.cid=container.cid AND fid=?`;
    console.log(sql)
    let result = await query(sql, data);
    return result;
}

//删表
async function deleteTable (data){
    let sql = `DELETE FROM ${table}`;
    let result = await query(sql, data);
    return result;
}


module.exports={
    listFlow,
    insertFlow,
    deleteFlow,
    updateFlow,
    updateResult,
    getById,
    deleteTable
}