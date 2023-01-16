const express = require ('express')
const router = express.Router()
const User = require('../model/userModel')
router.post('/newuser',(req,res)=>{
    const newUser = new User(req.body)
    newUser.save((err,data)=>{
        if(err) throw err
        else res.send(data)
    })
})
router.post('/newusers',(req,res)=>{
    User.create(req.body).then((data)=>res.json(data)).catch((err)=>res.status(500).json(err));
})
router.get('/user/:name',(req,res)=>{
    User.find({name:req.params.name},
    (err,data)=>{
        if (err) throw err
        else res.json(data)
    })
})


router.get('/user/:name',(req,res)=>{
    User.findOne({name:req.params.name},
    (err,data)=>{
        if (err) throw err
        else res.json(data)
    })
})
router.get('/user/:userId',(req,res)=>{
    User.findById(req.params.userId,req.body,
    (err,data)=>{
        if (err) throw err
        else res.json(data)
    })
})
router.put('/user/update/:userId',(req,res)=>{
    User.findByIdAndUpdate(req.params.userId,req.body),
    (err,data)=>{
        if (err) throw err
        else res.json(data)
    }
})
router.delete('/user/delete/:userId',(req,res)=>{
    User.findByIdAndRemove(req.params.userId),
    (err,data)=>{
        if (err) throw err
        else res.json(data)
    }
})
router.delete('/user/delete/:name',(req,res)=>{
    User.Remove(req.params.name),
    (err,data)=>{
        if (err) throw err
        else res.json(data)
    }
})
router.get('/limit',(req,res)=>{
    const foodToSearch = " burritos";
    User.find()
    .sort({name : 1})
    .limit(2)
    .select("-age")
    .exec((err, data)=> {
        if(err){
        console.log(err)
        res.json({msg:'error'})
        }else{
            res.json(data)
        }})
    })
    module.exports = router