const mongoose = require('mongoose')

const connectionString="mongodb+srv://fbs:123345@cluster0.oafr1ws.mongodb.net/test"
mongoose.connect(connectionString)
.then(()=>{
    console.log("Connection established successfully")
})
.catch(()=>{
    console.log("Error connecting..")
})
