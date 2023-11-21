import mongoose from "mongoose"

async function connectToDb () {
  mongoose.connect(process.env.DB_CONNECTION_STRING)
  return mongoose.connection
}

export default connectToDb