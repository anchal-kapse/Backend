const express=require('express')
const ordeRouter =express.Router()

ordeRouter.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:"Get Product"
    })
})

ordeRouter.post('/',(req,res,next)=>{
    res.status(200).json({
        msg:"Post Product"
    })
})

// ordeRouter.get('/:productId',(req,res,next)=>{
//     res.status(200).json({
//         msg:"Single Product"
//     })
// })

ordeRouter.get('/:productId',(req,res,next)=>{
    const id=req.params.productId

    if(id=="8"){
        res.status(200).json({
            msg:"Wow"
        })
    }
    else{
        res.status(200).json({
            msg:"Soory"
        })
    }
    
})

ordeRouter.put('/:productId',(req,res,next)=>{
    const id=req.params.productId

    res.status(200).json({
        msg:"Put Product",
        id:id
    })
    
})


ordeRouter.delete('/:productId',(req,res,next)=>{
    const id=req.params.productId

    res.status(200).json({
        msg:"Delete Product",
        id:id
    })
    
})

module.exports=ordeRouter