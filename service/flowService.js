const dao = require('../dao/flowDao')


module.exports.list=async ctx=>{
    let result=await dao.listFlow();
    console.log(result)
    return ctx.body=result;
}

module.exports.insert=async ctx=>{
    let cid=ctx.query['cid'];
    let param=ctx.query['param'];
    let result=ctx.query['result'];
    let lable=ctx.query['lable'];
    let fstate=ctx.query['fstate'];
    let dbresult=await dao.insertFlow([cid,param,result,lable,fstate]);
    console.log(dbresult)
    return ctx.body=dbresult.insertId
}

module.exports.updateState=async ctx=>{
    let fid=ctx.query['fid'];
    let fstate=ctx.query['fstate'];
    let dbresult=await dao.updateFlow([fstate,fid]);
    console.log(dbresult)
    return ctx.body=dbresult
}

module.exports.updateResult=async ctx=>{
    let fid=ctx.query['fid'];
    let result=ctx.query['result'];
    let dbresult=await dao.updateResult([result,2,fid]);
    console.log(dbresult)
    return ctx.body=dbresult
}

module.exports.getById=async ctx=>{
    let fid=ctx.query['fid'];
    let dbresult=await dao.getById([fid]);
    console.log(dbresult)
    return ctx.body=dbresult[0]
}

