const Sequelize = require('sequelize');
const db = new Sequelize('movies', 'postgres', 'admin',{
    dialect: "postgres",
    host: 'localhost'
})
module.exports =db





// import { Pool } from 'postgres-pool';

// const pool = new Pool({
//   host: 'localhost',
//   database: 'movies',
//   user: 'postgres',
//   password: 'admin',
//   port: 5432,
// });

// module.exports = pool;