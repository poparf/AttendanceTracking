const express = require("express");
const participantRouter = express.Router();
const { authToken } = require("../utils/middlewares");
const AppError = require("../utils/errors/AppError");
const { Participant, Event } = require("../models/setup");

// Base url: /api/participant

participantRouter.get("/:eventId", authToken, async (req, res, next) => {
  try {
    let participants = await Participant.findAll({
      where: {
        eventId: req.params.eventId,
      },
    });

    return res.statusCode(200).send(participants);
  } catch (error) {
    next(error);
  }
});

/*
{
    name: "Robert",
    code: 12314
} 
*/

participantRouter.post("/", async (req, res, next) => {
    try {
        if (req.body.name == null || req.body.code == null) {
            throw new AppError("You must include name and code fields.");
        }

        let event = await Event.findOne({where: {code: req.body.code}});
        if(event == null)
            throw new AppError("There is no event with that code.");
        
        let [participant, created] = await Participant.findOrCreate({
            where: {
                name: req.body.name,
                eventId: event.id
            }
        })

        if(created)
            return res.statusCode(201).send(participant);
        else
            throw new AppError("Participant already exists.");
    } catch (error) {
        next(error);
    }
});
