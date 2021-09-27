const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        //mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URl,{
            useNewParser: true,
            useUnifiedTopology:true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log('MongoDB connected : ${con.connection.host}')
    } catch (error) {
        console.log(Error);
        process.exit(1);
    }
}
module.exports = connectDB