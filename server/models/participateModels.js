const { Pool } = require('pg');

const PG_URI = 'postgres://knykepfx:eFki2TGFYcK7s5600i3hhG0g1xBt8Bqr@kashin.db.elephantsql.com/knykepfx';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});


// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
