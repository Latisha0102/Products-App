const mongoose = require("mongoose")
//const { type } = require("os")

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    category: {
        type: String,
        enum: ["Mens" , "Womens", "Kids" ,"Home" , "Electronics"]
    }
})

const Products = mongoose.model('Products',productsSchema)

module.exports = Products