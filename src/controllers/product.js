
const Product = require("../models/product")
// Create Data
exports.createProducts=async(req,res)=>{
    
        try {
            //Data Create
            const product=await Product.create(req.body)
            res.json({
                status:"success",
                data: product
            })
            
        } catch (error) {
            console.log(error.message)
        }
}

// Read data
exports.readProducts=async(req,res)=>{
    try {
        const products=await Product.find({})
        res.json({
            status:"success",
            data: products
        })

    } catch (error) {
        console.log(error.message)
    }
}

// Read One Product

exports.readOneProduct=async(req,res)=>{
        const id=req.params.id;
        try {
            const product=await Product.findById(id)
            res.json({
                status:"success",
                data: product
            })
            
        } catch (error) {
            console.log(error.message)
        }
}

// Data Update

exports.updateProduct=async(req,res)=>{
    //Data receive 
    const reqBody = req.body;
    const id=req.params.id
    try {
        const updated=await Product.findByIdAndUpdate(id,reqBody).exec()
        res.json({
            status:"success",
            data: updated
        })

    } catch (error) {
        
    }
}

// Delete Data

exports.deleteProduct=async(req,res)=>{
    const id=req.params.id;
    try {
        const deleted=await Product.findByIdAndDelete(id);
        res.json({status:"successfully deleted",data:deleted})
    } catch (error) {
        console.log(error.message)
    }
}