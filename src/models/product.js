const mongoose = require('mongoose');

const productSchema= new mongoose.Schema(
    {
        ProductName:{type:String},
        ProductCode:{type:String},
        Img:{type:String},
        UnitPrice:{type:String},
        Qty:{type:String},
        TotalPrice:{type:String},

    },
    {timestamps:true,versionKey:false}
);

const Product= mongoose.model('Product',productSchema);

module.exports = Product;       