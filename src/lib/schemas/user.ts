import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    auth0Id: {
      required: true,
      unique: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
