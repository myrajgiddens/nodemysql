
const {Sequelize, DataTypes, Model} = require('sequelize');

const {sequelize} = require('./db');





class AppUser extends Model {



}



AppUser.init({

    firstName: {

        type: DataTypes.STRING,

        // allowNull: false

    },

    lastName: {

        type: DataTypes.STRING,

        // allowNull: false

    },

    hashPassword: {

        type: DataTypes.STRING,

        // allowNull: false

    },

    email: {

        type: DataTypes.STRING

    }

}, {

    sequelize, // We need to pass the connection instance

    modelName: 'AppUser', // We need to choose the model name

});




class Category extends Model {



}



Category.init({

    name: {

        type: DataTypes.STRING,

        // allowNull: false

    }

}, {

    sequelize, // We need to pass the connection instance

    modelName: 'Category', // We need to choose the model name

});



class Question extends Model {



}



Question.init({

    text: {

        type: DataTypes.STRING,

        // allowNull: false

    },

    answer: {

        // type: DataTypes.STRING,

        type: 'LONGTEXT',

        // allowNull: false

    }

}, {

    sequelize, // We need to pass the connection instance

    modelName: 'Question', // We need to choose the model name

});



Category.hasMany(Question, { foreignKey: 'categoryId' });

Question.belongsTo(Category, { foreignKey: 'categoryId' });





sequelize.sync({alter: true});



module.exports = {Category, Question, AppUser};



