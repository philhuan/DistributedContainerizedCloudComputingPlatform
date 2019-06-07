const query=require('../util/mysql');

const table='container';

//获取所有流程信息
async function list() {
    let sql = `select * from ${table}`;
    let result = await query(sql, []);
    return result;
}

//插入新流程
async function insert(data){
    let sql1 = `select * from ${table} WHERE mip='${data[0]}' AND port=${data[2]}`;
    let result1=await query(sql1,data);
    console.log('sql'+ result1)
    if(result1[0]){
        return {
            "affectedRows": 1,
            "message": ""
        }
    }
    let sql=`insert into ${table} (mip,pip,port,cstate) values (?,?,?,?)`;
    let result=await query(sql,data);
    return result;
}

//通过fid流程
async function deleteFlow(data){
    let sql=`delete from ${table} where uid=?`;
    let result=await query(sql,data);
    return result;
}

//通过uid修改流程状态
async function update(data){
    let sql=`UPDATE ${table} set cstate=? WHERE cid=?`;
    let result=await query(sql,data);
    return  result;
}

//通过ip,port修改流程状态
async function updateByAddr(data){
    let sql=`UPDATE ${table} set cstate=? WHERE mip=? AND port=? `;
    let result=await query(sql,data);
    return  result;
}


module.exports={
    list,
    insert,
    deleteFlow,
    update,
    updateByAddr
}