// Core Module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        if (error) {
          console.log("Error writing to file", error);
        } else {
          console.log("Home data saved successfully");
        }
      });
    });
    
  }

  static fetchAll(callback) {

    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath,(err,data) =>{
      if(!err) {
        console.log("File readed", !err);
           callback(JSON.parse(data));
      }else {
           callback([]);
      }
    });
  }
};
