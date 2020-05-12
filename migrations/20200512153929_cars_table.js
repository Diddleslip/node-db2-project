// The .up() records the changes to be applied to the db
exports.up = function(knex) {
    // Create cars table
  return knex.schema.createTable("cars", tbl => {
    // Primary key, called id, autoincrements, not null
    tbl.increments();
    tbl.string("VIN").notNullable().unique();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();

    tbl.string("transmission type");
    tbl.string("title");
})
};

exports.down = function(knex) {
  return knex.schema.dropTable("cars");
};
