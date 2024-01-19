const express = require('express');
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const setupAndStartServer = async ()=>{
    //create a express server
    const app = express();

    
    app.listen(PORT,()=>{
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        console.log(`Server is running on port:${PORT}`);
        // console.log(process.env);
    });
}

setupAndStartServer();