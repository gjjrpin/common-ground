/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("topics", (table) => {
        table.uuid("id").primary();
      // foreign key is a primary key of another table.
      table
        // .uuid will make a column called "category_id"
        .uuid("category_id")
        .references("categories.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("statement").notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("topics");
  };
  