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
    //console.log('sql'+ JSON.stringify(result1) )


    if(!result1[0]){
        let sql=`insert into ${table} (mip,pip,port,cstate) values (?,?,?,?)`;
        let result=await query(sql,data);
        return result.insertId;
    }else{
        return result1[0].cid
    }


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


//删表
async function deleteTable (data){
    let sql = `DELETE FROM ${table}`;
    let result = await query(sql, data);
    return result;
}

module.exports={
    list,
    insert,
    deleteFlow,
    update,
    updateByAddr,
    deleteTable
}