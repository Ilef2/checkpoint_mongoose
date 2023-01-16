const express = require ('express')
const app = express()
const mongoose = require ('mongoose')

require('dotenv').config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, (err)=>{
  if (err) throw err
  else console.log('database connected')
});

app.use('/api/user',require('./roots/userRoute'))





app.listen(process.env.PORT, (err)=>err?console.log(err):console.log(`server is runing`))

  



