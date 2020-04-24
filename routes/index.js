/*
Author : Sameer Shanbhag (801099638)
*/

var express = require('express')
var router = express.Router();

let sessionStorage = require('../utility/sessionStorage');

router.get('/', (req, res) => {
  res.status(200).send({"Error" : "Please Use the Front End to navigate through this API"});
});

module.exports = router;
