const mongoose = require("mongoose")
//const { type } = require("os")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: {
        type:String,
        required: true 
    },
    address: [
        {
          fullName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
}]
})

const Users = mongoose.model('Products',userSchema)

module.exports = Users