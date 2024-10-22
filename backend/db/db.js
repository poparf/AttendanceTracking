require("dotenv").config();
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established sucesssfuly.");
        sequelize.close();
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}

class Event extends Model {};
Event.init({
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('OPEN', 'CLOSED')
    },
    openDate: {
        type: DataTypes.DATE
    }
})
// event
// id
// name
// description
// status with enum OPEN/CLOSED