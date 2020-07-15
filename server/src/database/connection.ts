import knex from "knex";

const connection = knex({
  client: "pg",
  version: "12.3",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "postgres",
    database: "db_ecoleta",
  },
});

export default connection;
