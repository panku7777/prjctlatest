const mongoose=require("mongoose")
var mongoUrl="mongodb+srv://swetha:123@cluster0.mruuu3j.mongodb.net/Elibrary?retryWrites=true&w=majority"
mongoose.connect(mongoUrl)
.then(()=>{
    console.log("Database Connected")

})

.catch(err =>
    {
        console.log(err)
    })

    module.exports=mongoose