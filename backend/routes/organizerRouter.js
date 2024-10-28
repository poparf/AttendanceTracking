const express = require('express')
const organizerRouter = express.Router()
const { Organizer } = require("../models/setup");
const AppError = require('../utils/errors/AppError');

// Base-url: /api/organizer

organizerRouter.get("/:id", async (req, res, next) => {
    try {
        let o = await Organizer.findByPk(req.params.id);
        return res.send(o);
    } catch (error) {
        next(error);
    }
})



// organizerRouter.post("/", async (req, res, next) => {
//     try {
//         if(!req.body.organizer)
//             throw new AppError("You must include a field with a organizer in order to create one.");

//         let organizerName = req.body.organizer.name;
//         let newOrganizer = await Organizer.create({
//             name: organizerName
//         })

//         const resourceUrl = `${req.protocol}://${req.get('host')}/organizer/${newOrganizer.id}`;

//         return res.statusCode(201).location(resourceUrl.send(newOrganizer));
//     } catch (error) {
//         next(error);
//     }
// })

module.exports = organizerRouter;