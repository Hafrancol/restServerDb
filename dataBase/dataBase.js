const mongoose = require('mongoose');

const connectDb = async () => {

    try {
        await mongoose.connect(process.env.CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log(error);
        throw error("Problemas de conexion");
    }
}


module.exports = {connectDb};