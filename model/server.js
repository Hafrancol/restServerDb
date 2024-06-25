const express = require("express");
const { connectDb } = require('../dataBase/dataBase');

class Server {


    constructor(){
        this.app = express();
        this.connectDataBase();
        this.middleware();
        this.routes();
        this.listen();
        
    }
    
    async connectDataBase (){
        await connectDb();
    }

    middleware(){
        this.app.use(express.json()); // poder recibir Body en la request
        this.app.use(express.static("/public")) // para servir html y css y js en carpeta public
    }
    
    routes(){
        this.app.use("/user", require("../routes/user.route"));
        this.app.use("/student", require("../routes/student.route"));
    }

    listen(){
        this.app.listen(process.env.PORT);
    }

}

module.exports = Server;