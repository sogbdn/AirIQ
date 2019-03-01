// populates database table users with fake users
//called a_users for sorting and quality of life reasons
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"),
    knex("users")
      .del()
      // Deletes ALL existing entries
      .then(function() {
        return knex("users").insert([
          /* add actual values to test the database */
          {
            name: "Leslie"
          },
          {
            name: "Sonia"
          },
          {
            name: "Justin"
          }
        ])
      })
  ])
};
