require("dotenv").config();
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established sucesssfuly.");
        sequelize.close();
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
    return null;
}

module.exports = {connectToDatabase, sequelize};