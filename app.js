//Core Modules
const path = require('path');
// external module
const express = require('express');
// Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');

const errorsController = require('./controllers/errors');

const app = express();
app.use(express.static(path.join(rootDir,'public')));

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded());

app.use(storeRouter);

app.use("/host",hostRouter);

app.use(errorsController.pageNotFound);


const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`server running on address http://localhost:${PORT}`);
});