const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Participant extends Model {}
Participant.init(
  {
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

module.exports = Participant;
