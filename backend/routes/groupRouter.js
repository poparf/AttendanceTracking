const express = require("express");
const groupRouter = express.Router();
const AppError = require("../utils/errors/AppError");
const { Group, Organizer, Event } = require("../models/setup");
const { authToken } = require("../utils/middlewares")
// Base-url: /api/group

// Gets an req.query.organizer to filter
// Gets the group of events togheter with the events
// Example of response ( generated by gpt )
// [
//     {
//         "id": 1,
//         "name": "Group 1",
//         // ... other group fields
//         "Events": [
//             {
//                 "name": "Event 1",
//                 "description": "Description 1",
//                 "status": "active",
//                 "openDate": "2024-01-01"
//             },
//             // ... more events
//         ],
//         "Organizer": {
//             "name": "Organizer Name"
//         }
//     },
//     // ... more groups
// ]

groupRouter.post("/", authToken, async (req, res, next) => {
  try {
    
    if(!req.body.group)
      throw new AppError("You must include information about the group.");

    const [newGroup, wasCreated ] = await Group.findOrCreate({ where: {
      organizerId: req.user.id,
      name: req.body.name
    }})

    if(wasCreated)
      return res.statusCode(201).send(newGroup);
    else
      throw new AppError("Resource with that name already exists.", 409);

  } catch (error) {
    next(error);
  }
})

groupRouter.get("/", authToken, async (req, res, next) => {
  try {
    const groups = await Group.findAll({
      attributes: {
        exclude: ["modifiedAt"],
      },
      include: [
        {
          model: Event,
          attributes: ["name", "description", "status", "openDate", "closeDate", "code"],
        },
        {
          model: Organizer,
          attributes: ["name"],
          where: {
            name: req.user.name,
          },
        },
      ],
    });

    if (!groups.length) {
      throw new AppError("No groups found for this organizer", 404);
    }
    res.json(groups);
  } catch (error) {
    next(error);
  }
});

module.exports = groupRouter;
