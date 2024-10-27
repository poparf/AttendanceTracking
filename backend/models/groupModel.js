const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Group extends Model {}
Group.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "group",
  }
);

module.exports = Group;
