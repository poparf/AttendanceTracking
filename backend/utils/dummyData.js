const { Event, Group, Organizer, Participant } = require("../models/setup");

const insertDummyData = async () => {
  // Truncate tables to start fresh
  await Participant.truncate({ cascade: true });
  await Event.truncate({ cascade: true });
  await Group.truncate({ cascade: true });
  await Organizer.truncate({ cascade: true });

  // Create an organizer
  const robert = await Organizer.create({ name: "robert" });

  console.log(robert.id);
  // Create a group and assign the organizer to it
  const fitnessGroup = await Group.create({
    name: "Fitness",
    organizerId: robert.id,
  });

  const adunareEvent = await Event.create({
    name: "Adunarea generala",
    description:
      "Adunarea generala reprezinta o intalnire a tuturor membrilor din comunitatea de fitness.",
    status: "OPEN",
    openDate: new Date(),
    code: "ABC123",
    groupId: fitnessGroup.id,
  });

  const antrenamentEvent = await Event.create({
    name: "Antrenament Saptamanal",
    description:
      "Antrenamentul saptamanal reprezinta un antrenament ce se desfasoara in fiecare saptamana.",
    status: "CLOSED",
    openDate: new Date(),
    code: "CDE456",
    groupId: fitnessGroup.id,
  });

  const alexParticipant1 = await Participant.create({
    name: "alex",
    joined: new Date(),
    eventId: adunareEvent.id,
  });
  const mateiParticipant1 = await Participant.create({
    name: "matei",
    joined: new Date(),
    eventId: adunareEvent.id,
  });

  const alexParticipant2 = await Participant.create({
    name: "alex",
    joined: new Date(),
    eventId: antrenamentEvent.id,
  });
};

insertDummyData();
