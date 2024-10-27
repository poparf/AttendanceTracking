const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../db");

const Organizer = require("./organizerModel");

class Group extends Model() {}
Group.init(
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
    modelName: "group",
  }
);

// The A.hasMany(B) association means that a One-To-Many relationship exists between A and B,
//  with the foreign key being defined in the target model (B).
Organizer.hasMany(Group);
Group.sync();

module.exports = Group;
