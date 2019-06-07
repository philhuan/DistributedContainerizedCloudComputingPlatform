const router = require('koa-router')();
const containerService = require('../service/containerService')

router.get('/list',containerService.list)
router.get('/insert',containerService.insert)
router.get('/update',containerService.update)
router.get('/updatebyAddr',containerService.updatebyAddr)
module.exports=router;