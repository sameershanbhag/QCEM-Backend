/*
Author : Sameer Shanbhag (801099638)
*/

var express = require('express')
var router = express.Router();

let sessionStorage = require('../utility/sessionStorage');

router.get('/', (req, res) => {
  res.render('index', {name: sessionStorage.userName(), title: 'index'});
});

router.get('/about', (req, res)=>{
  res.render('about', {title: 'about', name: sessionStorage.userName()});
});

router.get('/contact', (req, res) => {
  res.render('contact', {title: 'contact', name: sessionStorage.userName()});
});

router.post('/contact', (req, res) => {
  res.render('contact', {title: 'contact', data: "We will get back to you shortly.", name: sessionStorage.userName()});
});

module.exports = router;
