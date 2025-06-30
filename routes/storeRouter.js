// external module
const express = require("express");
// Local Module
const storeController = require("../controllers/storeController");
const storeRouter = express.Router();

storeRouter.get("/", storeController.getIndex);

storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/favourites", storeController.getFavouriteList);

module.exports = storeRouter;
