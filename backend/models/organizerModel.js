const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Organizer extends Model {}
Organizer.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "organizer",
  }
);

module.exports = Organizer;
