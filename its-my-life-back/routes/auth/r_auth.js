var express = require('express');
var router = express.Router();
const authModule = require("../../modules/auth/m_auth");

router.post('/user/create', function(req, res, next){
    authModule.createAccount(req, function(){

    });
    res.send('respond with a resource');
});

module.exports = router;
