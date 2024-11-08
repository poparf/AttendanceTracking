const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Event extends Model {}
Event.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("UPCOMING", "ONGOING", "CLOSED"),
    },
    openDate: {
      type: DataTypes.DATE,
    },
    closeDate: {
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

module.exports = Event;
