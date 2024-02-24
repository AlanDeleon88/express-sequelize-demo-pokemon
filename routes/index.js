const express = require('express');


const router = express.router();

const apiRouter = require('./api')

router.use('/api', apiRouter);



module.exports = router;
