# Attendance Tracking project

1. Clone the repository.
2. npm init in backend and then in frontend directories
3. npm install
4. in *frontend* use npm run dev
5. in *backend* use node index.js

You may also need postgresql installed with a server that has a user postgres and a password. mine in this case is Seneca123 but you can set another one.
node .\db\setup.js\ to initialize the database.
it might require multiple rerun of the command.
 
Resource for postgresql/node:
https://fullstackopen.com/en/part13/using_relational_databases_with_sequelize#node-application-using-a-relational-database

IMPORT THE MODEL FROM /MODELS/SETUP.JS

## Packages

1. Dotenv is used to store enviroment variables
2. pg/pg-promise is the node library for using postgreSQL
3. Sequelize is the ORM


# BUGS:
1. when you click create the scroll bar dissapears