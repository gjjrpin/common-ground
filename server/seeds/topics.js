const { v4: uuidv4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("topics").del();
  await knex("topics").insert([
    // Liberal Statement -------------------------------------------------
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab1",
      statement: "Access to quality healthcare is a basic human right.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab1",
      statement:
        "Climate change is a real and pressing issue that requires immediate action.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab1",
      statement:
        "The government has a responsibility to ensure that all citizens have access to education and job training.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab1",
      statement:
        "Taxation is necessary to fund essential government services and to reduce income inequality.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab1",
      statement:
        "The criminal justice system should prioritize rehabilitation over punishment.",
    },
    // ---------------------------------------------------------------------

    // Conservative Statement -------------------------------------------------
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      statement:
        "The government should have a smaller role in people's lives and businesses.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      statement: "Lower taxes will promote economic growth and job creation.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      statement:
        "Individual responsibility and self-reliance should be emphasized.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      statement:
        "The free market should be allowed to operate without government interference.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      statement: "People should have the right to own firearms.",
    },
    // ---------------------------------------------------------------------

    // Things Conservatives and Liberals can agree on-----------------------
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      statement:
        "The importance of a strong national defence and protecting national security.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      statement:
        "The importance of individual rights and freedoms, such as freedom of speech and religion.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      statement:
        "The importance of a strong national defence and protecting national security.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      statement:
        "The importance of protecting the environment and preserving natural resources for future generations.",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      statement:
        "The importance of providing access to education and opportunities for personal and professional growth.",
    },
    // ---------------------------------------------------------------------
  ]);
};
