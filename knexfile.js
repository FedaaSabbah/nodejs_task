
var knex = require('knex')({
  client: "mysql",
  connection: {
      connection: {
      host:process.env.DB_HOST,
      user: process.env.DB_USER, 
      password: process.env.DB_PASS, 
      database: process.env.DB_NAME
    },
    debug: true,
    pool:{min:0, max:10}
  }
});
module.exports=knex; 
