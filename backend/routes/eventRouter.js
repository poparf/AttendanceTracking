const express = require("express");
const eventRouter = express.Router();
const AppError = require("../utils/errors/AppError");
const { Event, Group } = require("../models/setup");
const { authToken } = require("../utils/middlewares");
const generateRandomUUID = require("../services/uniqueCodeService");

// Base-url: /api/event

eventRouter.post("/", authToken, async (req, res, next) => {
    console.log(`Authenticated user:`)
    console.log(req.user)
    try {
        if(!req.body.name) // TOOD: Check the existence of all fields
            throw new AppError("You must include event data.")

        let now = new Date().getTime();
        let openDate = new Date(req.body.openDate);
        let closingDate = new Date(req.body.closingDate);
        if(!(openDate > now && closingDate > openDate)) {
            throw new AppError("Open date and closing date not valid.")
        }        

        // if the groupId sent is owned by the authenticated user
        let group = await Group.findByPk(req.body.groupId);

        if(group.organizerId !== req.user.id) {
            throw new AppError("", 401); // don't send any information
        }
        
        if(group === null) {
            throw new AppError("The group id doesn't exist.");
        }



        let [newEvent, wasCreated] =
         await Event.findOrCreate({where: {name: req.body.name}},
        {defaults: {
            name: req.body.name,
            description: req.body.description,
            openDate: openDate,
            closingDate: closingDate,
            status: "CLOSED",
            code: generateRandomUUID(),
            groupId: groupId
        }});
        
        if(!wasCreated)
            throw new AppError("Resource with that name already exists.", 409);

        return res.statusCode(201).send(newEvent); // TODO: Add location
    } catch (err) {
        next(err);
    }
});

module.exports = eventRouter;
