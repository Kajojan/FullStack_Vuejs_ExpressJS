module.exports={
    register(req,res){
            res.send({
              messege: `user ${req.body.email} was registered`,
            })
        
    }
}