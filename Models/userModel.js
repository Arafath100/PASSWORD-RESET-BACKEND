const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  avatar:{
    type:String,
    required:true
  },
  resetToken: {
    type: String,
    default: null
  },
  resetTokenExpiration: {
    type: Date,
    default: null
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
