const mongoose = require("mongoose")


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

const UsersData = mongoose.model('UsersData',userSchema)

module.exports = UsersData