const {initializeDatabase} = require('./db/db.connect')
const express = require('express')
const app = express()
const cors = require('cors')
const Products = require('./models/products.models')
const Categories = require('./models/category.models')
const Wishlist = require('./models/wishlist.model')
const Cart = require('./models/cart.model')

app.use(express.json())

const corsOption = {
    origin: "*",
    credential: true

}

app.use(cors(corsOption))
initializeDatabase()

app.get("/products" , async(req,res) => {
    try{
        const products = await Products.find()
        res.json({data: {products}})
    }catch(error){
        res.status(500).json({message: "Error in getting the data"})
    }
})

app.post("/products" , async(req,res) => {
    const {name , price , category, rating} = req.body
    try{
        const product= new Products({name , price, rating , category})
        await product.save()
        res.status(201).json(product)
    }catch(error){
        res.status(500).json({message: "Error in creating the product"})
    }
})

app.get("/products/:productId" , async(req,res) => {
    try{
        const productId = req.params.productId
        const product = await Products.findById(productId)
        res.status(201).json({data: {product}})
    }catch(error){
        res.status(500).json({message: "Error"})
    }
})


app.get("/categories", async(req,res) => {
    try{
        const category = await Categories.find()
        res.status(201).json({data: {category}})
    }catch(error){
        res.status(500).json({message: "Error in getting the data"})
    }
})

app.get("/wishlist", async(req,res) => {
    try{
        const wishlist = await Wishlist.find()
        res.status(201).json({data: {wishlist}})
    }catch(error){
        res.status(500).json({message: "Error in getting the data"})
    }
})

app.get("/wishlist/:productId" , async(req,res) => {
    try{
        const productId = req.params.productId
        const product = await Products.findById(productId)
        res.json({data: {product}})
    }catch(error){
        res.status(500).json({message: "Error in getting the data"})
    }
})

app.post("/wishlist" , async(req,res) => {
    const {name , price , category, rating} = req.body
    try{
        const product= new Wishlist({name , price, rating , category})
        await product.save()
        res.status(201).json(product)
    }catch(error){
        res.status(500).json({message: "Error in creating the product"})
    }
})

app.get("/cart", async(req,res) => {
    try{
        const cart = await Cart.find()
        res.status(201).json({data: {cart}})
    }catch(error){
        res.status(500).json({message: "Error in getting the product"})
    }
})
app.get("/cart/:productId" , async(req,res) => {
    try{
        const productId = req.params.productId
        const product = await Products.findById(productId)
        res.json({data: {product}})
    }catch(error){
        res.status(500).json({message: "Error in getting the data"})
    }
})

app.post("/cart" , async(req,res) => {
    const {name , price , category, rating , quantity} = req.body
    try{
        const product= new Cart({name , price, rating , category , quantity})
        await product.save()
        res.status(201).json(product)
    }catch(error){
        res.status(500).json({message: "Error in creating the product"})
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is running");
})