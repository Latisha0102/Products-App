const mongoose = require("mongoose")
//const { type } = require("os")

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ["Mens" , "Womens", "Kids" ,"Home" , "Electronics"]
    }
})

const Categories = mongoose.model('Categories',categorySchema)

module.exports = Categories