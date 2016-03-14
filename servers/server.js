// See also https://github.com/neumino/rethinkdbdash

var rethinkdb = require('rethinkdbdash')({
//  pool: false, // as soon as you execute the module, you will create a default connection pool (except if you pass  {pool: false} 
  cursor: true,
  servers: [{host: 'localhost', port: 8080}] // Use the values of your running RethinkDB instance
}); // You need to execute the module when you import it.

// With the official driver:
// var r = require('rethinkdb');

//query.run().then(function(result) {
//  console.log(result);
//});

rethinkdb.db('test').table('data').run().then(function(error, result) {
	console.log(result);
});


/*
rethinkdb.db('test').tableCreate('authors').run().then(function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
});
*/