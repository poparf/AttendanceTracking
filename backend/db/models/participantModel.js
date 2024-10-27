const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../db");

const Event = require("./eventModel");

class Participant extends Model {}
Participant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    joined: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "participant",
  }
);

Event.hasMany(Participant);
Participant.sync();

module.exports = Participant;
