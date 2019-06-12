const dao = require('../dao/containerDao')



module.exports.list=async ctx=>{
    let result=await dao.list();
    console.log(result)
    return ctx.body=result;
}

module.exports.insert=async ctx=>{
    let mip=ctx.query['mip'];
    let pip=ctx.query['pip'];
    let port=ctx.query['port'];
    let cstate=ctx.query['cstate'];
    let dbresult=await dao.insert([mip,pip,port,cstate]);
    console.log(dbresult)
    return ctx.body=dbresult
}

module.exports.update=async ctx=>{
    let cid=ctx.query['cid'];
    let cstate=ctx.query['cstate'];
    let dbresult=await dao.update([cstate,cid]);
    console.log(dbresult)
    return ctx.body=dbresult
}

module.exports.updatebyAddr=async ctx=>{
    let ip=ctx.query['mip'];
    let port=ctx.query['port'];
    let cstate=ctx.query['cstate'];
    let dbresult=await dao.updateByAddr([cstate,ip,port]);
    console.log(dbresult)
    return ctx.body=dbresult
}

module.exports.deleteTable=async ctx=>{
    let dbresult=await dao.deleteTable([]);
    console.log(dbresult)
    return ctx.body=dbresult
}

