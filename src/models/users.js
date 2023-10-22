// models/users.js

const { DataTypes } = require('sequelize');
const db = require('../config/db');


const users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  }
}, {
  modelName: 'users', // Nama model Anda
  tableName: 'users', // Nama tabel yang sudah ada dalam database Anda
  timestamps: false, // Menghilangkan createdAt dan updatedAt jika tidak diperlukan
});

module.exports = users;
