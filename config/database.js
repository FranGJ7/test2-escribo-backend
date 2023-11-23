import 'dotenv/config'
const mongoose = require('mongoose');
const dataBasePassword = process.env.MONGO_DB


const connectingDB = async () => { 
  try{
  await mongoose.connect(dataBasePassword);
  console.log("Conectado ao Atlás")
  }catch(error){
    console.log(error)
  }
}

export default connectingDB

