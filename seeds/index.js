const { User, Category, Post,Popular} = require('../models');

// variables for the seed
const categorySeed = require('./categorySeedData.json');
const userSeed = require('./userSeedData.json');
const postSeed = require('./postSeedData.json');
const popularSeed= require('./popularPost.json');


const sequelize = require('../config/connection'); //import the connection to be used in the database  

//async function to seed the database
async function seed() {  //async function to seed the database
    try {
        await sequelize.sync({ force: true }); //sync the database 
        const categories = await Category.bulkCreate(categorySeed); //insert the data from the json file into the database
        const users = await User.bulkCreate(userSeed); 
        const posts = await Post.bulkCreate(postSeed); 
        const populars = await Popular.bulkCreate(popularSeed);
       
    }
    catch (err) { // if there is an error, console log the error
        console.log(err);
    }

    process.exit(0);
}

seed();





