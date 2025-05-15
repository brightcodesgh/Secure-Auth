import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name']
  },
  email:{
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
    required: true
  },

  password:{
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    validate: [
      {
        validator: function(value) {
          return /[0-9]/.test(value);
        },
        message: "Enter at least one number"
      },
      {
        validator: function(value) {
          return /[a-z]/.test(value);
        },
        message: "Enter at least one lowercase letter"
      },
      {
        validator: function(value) {
          return /[A-Z]/.test(value);
        },
        message: "Enter at least one uppercase letter"
      },
      {
        validator: function(value) {
          return /[!@#$%^&*(),.?":{}|<>]/.test(value);
        },
        message: "Enter at least one special character"
      }
        
    ],
    select: false
  },
  consfirmpassword:{
    type: String,
    validate: {
      validator: function(value){
        return value === this.password
      },
      message: "Please confirm password"
    }
  },

  status:{
    type: String,
    default: "inActive" 
  }
  
 
  
})
  
userSchema.pre('save', async function(next){
  
  if(!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.consfirmpassword = undefined
  
  next();
  
});
  
userSchema.methods.comparePassword = async function(userPassword, password){
  
  return await bcrypt.compare(userPassword, password);
  
};

const Users = mongoose.model('Users', userSchema);

export default Users;