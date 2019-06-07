const router=require('koa-router')();
const flowRouter = require('./flowRouter')
const containerRouter = require('./containerRouter')

router.use('/flow',flowRouter.routes())
router.use('/container',containerRouter.routes())

module.exports=router;