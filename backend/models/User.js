const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./db");

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
},
{
  timestamps: false,
  freezeTableName: true,
}
);
// Synchronize the model with the database
sequelize.sync()
  .then(() => {
    console.log('User model synchronized with the database');
  })
  .catch((error) => {
    console.error('Error synchronizing User model:', error);
  });

module.exports = User;