const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Organizer extends Model {}
Organizer.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    googleId: {
      type: DataTypes.TEXT,
      allowNull: true // TODO: Switch to false
    }
  },
  {
    sequelize,
    modelName: "organizer",
  }
);

module.exports = Organizer;
