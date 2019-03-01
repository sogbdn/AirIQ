
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"),
    knex("users")
      .del()
      .then(function() {
        return knex("users").insert([
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
