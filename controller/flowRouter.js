const router = require('koa-router')();
const flowService = require('../service/flowService')

router.get('/list',flowService.list)
router.get('/insert',flowService.insert)
router.get('/updateState',flowService.updateState)
router.get('/updateResult',flowService.updateResult)
router.get('/getById',flowService.getById)
module.exports=router;