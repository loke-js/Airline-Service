const express = require('express');
const {PORT}=require('./config/serverConfig');
const setupAndStartServer = async ()=>{
    //create a express server
    const app = express();

    
    app.listen(PORT,()=>{
        console.log(`Server is running on port:${PORT}`);
        // console.log(process.env);
    });
}

setupAndStartServer();