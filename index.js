const mongoose=require("mongoose")


const app=require("./app")


async function main(){
    await mongoose.connect("mongodb://127.0.0.1/restapi",{useNewUrlParser: true,useUnifiedTopology:true})
    console.log('Connected successfully to server');

}


main()











app.listen(3002,()=>console.log("server started"))