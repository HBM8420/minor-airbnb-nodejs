// Core Module
const path = require('path');
// External Module
const express = require('express');
// Local Module
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');
const rootDir = require('./utils/pathUtil');

const app = express();

app.use(express.urlencoded());

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

app.use(homeRouter);
app.use(contactRouter);

app.use((req,res) =>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`)
});