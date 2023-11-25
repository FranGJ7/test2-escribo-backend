import 'dotenv/config'
const mongoose = require('mongoose');
const Port = process.env.MONGO_DB


const connectingDB = async () => { 
  try{
  await mongoose.connect(Port);
  console.log("Conectado ao Atlas")
  }catch(error){
    console.log(error)
  }
}

export default connectingDB

