const express = require("express");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const { City, Airport } = require("./models/index");
const db = require("./models/index");
const CityRepository = require("./repository/city-reopository");
const bodyParser = require("body-parser");
const setupAndStartServer = async () => {
  //create a express server
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server is running on port:${PORT}`);

    //SYNCHRONIZING DATABASE TO MATCH MODEL-----------------

    if (process.env.SYNC_DB) db.sequelize.sync({ alter: true });

    // const airports=await City.findAll({
    //   where:{
    //     id:5
    //   },
    //   include:[
    //   {
    //     model: Airport
    //   }
    // ]
    // });
    // console.log(airports);
    // const city=await City.findOne({
    //   where:{
    //     id:5
    //   }
    // })
    // const airports=await city.getAirports();
    // const newAirport=await Airport.findOne({
    //   where:{
    //     id:15
    //   }
    // })
    // await city.addAirport(newAirport);
    // await city.addAirports({
    //   name:'Jindal Vijaynagar Airport'
    // });
    // console.log(city,airports);
  });
};

setupAndStartServer();
