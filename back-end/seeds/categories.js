/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("categories").del();
  await knex("categories").insert([
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeab1",
      category_title: "Liberal Statements",
    },
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      category_title: "Conservative Statements",
    },
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      category_title: "Things Conservatives and Liberals can agree on",
    },
  ]);
};
