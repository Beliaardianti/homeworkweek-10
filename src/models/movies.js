// models/users.js

const { DataTypes } = require('sequelize');
const db = require('../config/db');


const movies = db.define('movies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  genres: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.STRING,
  },
  photo: {
    type: DataTypes.STRING,
  }
}, {
  modelName: 'movies', // Nama model Anda
  tableName: 'movies', // Nama tabel yang sudah ada dalam database Anda
  timestamps: false, // Menghilangkan createdAt dan updatedAt jika tidak diperlukan
});

module.exports = movies;
