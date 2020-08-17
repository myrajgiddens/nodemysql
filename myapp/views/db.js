const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('mysql://root:password@localhost/nodedb');





module.exports = {sequelize};