const Event = require("../models/eventModel");
const Group = require("../models/groupModel");
const Organizer = require("../models/organizerModel");
const Participant = require("../models/participantModel");

Organizer.hasMany(Group);
Group.belongsTo(Organizer);
Group.hasMany(Event);
Event.belongsTo(Group);
Event.hasMany(Participant);
Participant.belongsTo(Event);

Organizer.sync({alter: true});
Group.sync({alter: true});
Event.sync({alter: true});
Participant.sync({alter: true});

module.exports = {
  Event,
  Group,
  Organizer,
  Participant,
};
