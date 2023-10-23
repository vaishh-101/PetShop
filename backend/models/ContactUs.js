const { DataTypes } = require('sequelize');
const sequelize = require('./db'); 

const ContactUs = sequelize.define('ContactUs', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'contactus', // Set the table name if it's different from the model name
  timestamps: false, // If you don't want Sequelize to manage createdAt and updatedAt fields
  freezeTableName: true,
});

// Sync the model with the database (create the table if it doesn't exist)
ContactUs.sync();

module.exports = ContactUs;
