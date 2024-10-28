const express = require("express");
const eventRouter = express.Router();
const AppError = require("../utils/errors/AppError");
const { Event } = require("../models/setup");
const { authToken } = require("../utils/middlewares");
// Base-url: /api/event

eventRouter.post("/", authToken, async (req, res, next) => {
    console.log(`Authenticated user: ${req.user}`)
    try {
        if(!req.body.event)
            throw new AppError("You must include event data.")

        let newEvent = await Event.create(req.body.event);
        return res.statusCode(201).send(newEvent); // TODO: Add location
    } catch (err) {
        next(err);
    }
});

module.exports = eventRouter;
