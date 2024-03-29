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
      statement: "Women don't get paid equally as men",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab1",
      statement:
        "Trans men should be allowed to compete in professional sports",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab1",
      statement:
        "People under the age of 18 should be allowed to take hormone blockers",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab1",
      statement:
        "Canada should ban all firearms, including the legally obtained ones",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab1",
      statement: "Women should have the right to an abortion",
    },
    // ---------------------------------------------------------------------

    // Conservative Statement -------------------------------------------------
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      statement: "There are only two genders",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      statement: "Illegal immigration should be strictly enforced",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      statement: "The 'Freedom Convoy' was a justified movement",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      statement:
        "The VPD (Vancouver Police Department) is a net positive in the city of Vancouver",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab2",
      statement:
        "All forms of speech must be protected; including the ones that insult people",
    },
    // ---------------------------------------------------------------------

    // Things Conservatives and Liberals can agree on-----------------------
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      statement: "Everyone should have the freedom to practice any religion",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      statement: "We should provide free housing to homeless people",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      statement: "Justin Trudeau is a good Prime Minister",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      statement: "All Canadians deserve the right to adequate healthcare",
    },
    {
      id: uuidv4(),
      category_id: "2922c286-16cd-4d43-ab98-c79f698aeab3",
      statement:
        "The city of Vancouver should take down the tent city in the DTES",
    },
    // ---------------------------------------------------------------------
  ]);
};
