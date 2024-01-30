const express = require('express');
const {City} =require('./models/index');
const {PORT}=require('./config/serverConfig');
const ApiRoutes=require('./routes/index');

const CityRepository = require('./repository/city-reopository');
const bodyParser = require('body-parser');
const setupAndStartServer = async ()=>{
    //create a express server
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);
    
    app.listen(PORT,async ()=>{
      console.log(`Server is running on port:${PORT}`);
      
});
}

setupAndStartServer();