const express=require("express");
const router=express.Router();

let newsSchema=require("../models/News");

router.route("/create-news").post(async(req,res,next)=>{
    await newsSchema.create(req.body)
    .then((result)=>{
        res.json({
            data:result,
            message:"Data Successfully added!",
            status:200,
        });
    })
    .catch((err) =>{
        return next(err);
    })
})

module.exports=router;

router.route("/").get(async(req,res,next)=>{
    const page_size=5;
    const page=parseInt(req.query.page||"0");
    const totalRecords=await newsSchema.countDocuments({})
    await newsSchema.find().limit(page_size).skip(page_size*page)
    .then((result)=>{
        res.json({
            data:result,
            total:Math.ceil(totalRecords/page_size),
            message:"All items successfully fetched",
            status:200,
        });
    })
    .catch((err)=>{
        return next(err);
    })
        });

router.route("/delete-news/:id").delete(async(req,res,next)=>{
    await newsSchema.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.json({
            msg:"Data Successfully Deleted.",
        })
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.route("/get-news/:id").get(async(req,res,next)=>{
    await newsSchema.findById(req.params.id)
    .then((result)=>{
        res.json({
            data:result,
            message:"data successfully fetched.",
            status:200,
        })
    })
    .catch((err)=>{
        return next(err);
    })
})


router.route("/update-news/:id").put(async(req,res,next)=>{
    await newsSchema.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    })
    .then((result)=>{
        res.json({
            data:result,
            msg:"data successfully updated.",
        })
    })
    .catch((err)=>{
        console.log(err);
    })
})