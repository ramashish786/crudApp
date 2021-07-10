const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EmployeeDB",{useNewUrlParser:true},(err)=>{
    if(!err){console.log("MongoDS connection successful.") }
    else{ console.log(" mongoDB Cooenction failed")}
})

require("./employees.model");