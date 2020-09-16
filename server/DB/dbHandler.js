const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const db = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

module.exports = {
    db
}