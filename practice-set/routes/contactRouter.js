// Core Module
const path = require('path');
// External Module
const express = require('express');
// Local Module
const rootDir = require('../utils/pathUtil');
contactRouter = express.Router();

contactRouter.get('/contact-us',(req,res,next) =>{
  res.sendFile(path.join(rootDir,'views','contact-us.html'));
});

contactRouter.post('/contact-us',(req,res,next) =>{
  console.log(req.body);
  res.sendFile(path.join(rootDir,'views','contact-succ.html'));
});

module.exports = contactRouter;