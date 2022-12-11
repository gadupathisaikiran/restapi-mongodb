
const express=require("express")
const app=express()
const user=require("./model")

app.get("/post",async (req,res)=>{

    const get=await user.find()


    res.send({
        result:"sucess",
        post:get
    })

  
})
app.post("/register",async(req,res)=>{

    try{

        const post=new user(req.body)

        post.save().then(()=>{
      
          res.send({
              result:"sucess",
              data:post
          })
      
        }).catch((e)=>{
          res.send(e.message)
        })

    }
    catch(e){
        res.send(e.message)
    }



  
})

module.exports=app