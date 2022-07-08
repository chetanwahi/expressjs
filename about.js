const path = require('path');
const exp = require('express');
const app1 = exp.Router();

app1.get('/about',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','website','about.html'))
 })

 
module.exports = app1;