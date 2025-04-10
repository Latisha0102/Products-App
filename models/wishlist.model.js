const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    category: {
        type: String,
        enum: ["Mens" , "Womens", "Kids" ,"Home" , "Electronics"]
    },
   
})

const Wishlist = mongoose.model("Wishlist" , wishlistSchema)
module.exports = Wishlist;