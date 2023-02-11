const mongoose  = require("mongoose");


const connectDatabase = () =>{ 
    
mongoose.connect(process.env.MONGODB_URL,{
//useNewUrlParser: true,//useUnifiedTopology: true,//useCreateIndex: true,
}
    )
.then((data)=>{ console.log(`connection successful with server : ${data.connection.host}`)
})

}

module.exports = connectDatabase;