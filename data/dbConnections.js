const knex = require("knex");

const knexfile = require("../knexfile");

const environment = process.env.NOVE_ENV || "development"; // undefined OR production

module.exports = knex(knexfile[environment]);