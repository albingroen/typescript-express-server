import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    auth0Id: {
      required: true,
      unique: true,
      type: String,
    },
    avatar: {
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
  },
  { timestamps: true, strict: true }
)

const User = mongoose.model('User', userSchema)

export default User
