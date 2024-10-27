const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../db");

class Organizer extends Model {}
Organizer.init(
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
  },
  {
    sequelize,
    modelName: "organizer",
  }
);

Organizer.sync();

module.exports = Organizer;
