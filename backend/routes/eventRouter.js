const express = require("express");
const eventRouter = express.Router();
const AppError = require("../utils/errors/AppError");
const { Event, Group, Organizer } = require("../models/setup");
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
        let closeDate = new Date(req.body.closeDate);
        if(!(openDate > now && closeDate > openDate)) {
            throw new AppError("Open date and closing date not valid.")
        }        

        // if the groupId sent is owned by the authenticated user
        let group = await Group.findByPk(req.body.groupId);
        let userOrganizer = await Organizer.findOne({where: {
            googleId: req.user.id
        }})
        if(group.organizerId !== userOrganizer.id) {
            console.log(group.organizerId,userOrganizer.id)
            throw new AppError("", 401); // don't send any information
        }
        
        if(group === null) {
            throw new AppError("The group id doesn't exist.");
        }
        if (!req.body.description || !req.body.openDate || !req.body.closeDate || !req.body.groupId) {
            throw new AppError("You must include all event data.");
        }
        // TODO: Status to be decided based on the open and closing time
        let status = "CLOSED";
        if (openDate > now && closeDate > now) {
            status = "UPCOMING";
        } else if (openDate <= now && closeDate >= now) {
            status = "ONGOING";
        }

        let [newEvent, wasCreated] =
         await Event.findOrCreate({where: {name: req.body.name},defaults: {
            name: req.body.name,
            description: req.body.description,
            openDate: openDate,
            closeDate: closeDate,
            status: status,
            code: generateRandomUUID(),
            groupId: group.id
        }});
        
        if(!wasCreated)
            throw new AppError("Resource with that name already exists.", 409);
        
        return res.status(201).location(`/api/event/${newEvent.id}`).send(newEvent);
    } catch (err) {
        next(err);
    }
});

module.exports = eventRouter;
