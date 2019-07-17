
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.integer('vin', 128).unique().notNullable();
    table.text('make').notNullable();
    table.text('model').unique().notNullable();
    table.text('mileage').notNullable();
    table.text('transmission_type');
    table.text('transmission_style');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
