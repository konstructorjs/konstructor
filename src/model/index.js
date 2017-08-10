const objection = require('objection');
const Knex = require('knex');
const path = require('path');

const Model = objection.Model;
const environment = process.env.NODE_ENV || 'development';
const currentDirectory = process.cwd();

let databaseSettings;
try {
  databaseSettings = require(path.join(currentDirectory, './config/database.js'));
  databaseSettings = databaseSettings[environment];
} catch (err) {
  throw new Error(`unable to load database settings for ${environment}\n${err.stack}`);
}

const knex = new Knex(databaseSettings);
Model.knex(knex);

module.exports = Model;
