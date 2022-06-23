const model = require('./model'); // Import the model

const sequelize = model.sequelize; // sequelize the model object
const User = model.User; // where User is the table name

User.sync(
    { force: true } // force: true will drop the table if it already exists
    
);
User.hasmany(Comment, {foreignKey: 'user_id'});
Comment.belongsTo(User, {foreignKey: 'user_id'}); //foreignKey: 'user_id' is the foreign key in the comment table




sequelize.sync({ force: true }).then(() => {    // sync the database and drop the table if it already exists