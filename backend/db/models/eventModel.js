const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../db");

const Group = require("./groupModel");

class Event extends Model {}
Event.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("OPEN", "CLOSED"),
    },
    openDate: {
      type: DataTypes.DATE,
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "event",
  }
);

Group.hasMany(Event);
Event.sync();

module.exports = Event;
