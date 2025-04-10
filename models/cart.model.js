const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    category: {
        type: String,
        enum: ["Mens" , "Womens", "Kids" ,"Home" , "Electronics"]
    },
   quantity: {
    type: Number,
    default : 1,
},
})

const Cart = mongoose.model("Cart" , cartSchema)
module.exports = Cart;