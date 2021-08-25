require('dotenv').config({path: require('path').resolve('.env')});

module.exports = {
  "development": {
    "username": process.env.user,
    "password": "<YOUR mySql password>",
    "database": process.env.database,
    "host": process.env.host,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.user,
    "password": "<YOUR mySql password>",
    "database": process.env.database,
    "host": process.env.host,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.user,
    "password": "<YOUR mySql password>",
    "database": process.env.database,
    "host": process.env.host,
    "dialect": "mysql"
  }
}