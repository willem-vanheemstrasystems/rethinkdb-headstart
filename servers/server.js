// See also https://github.com/neumino/rethinkdbdash

//var rethinkdb = require('rethinkdbdash')({
//  pool: false, // as soon as you execute the module, you will create a default connection pool (except if you pass  {pool: false} 
//  cursor: true,
//  servers: [{host: 'localhost', port: 8080}] // Use the values of your running RethinkDB instance
//}); // You need to execute the module when you import it.

// With the official driver:
var rethinkdb = require('rethinkdb');

// Create the table in the test database.
rethinkdb.db("test").tableCreate("fellowship")

// Add documents to the table.
rethinkdb.table("fellowship").insert([
  { name: "Frodo", species: "hobbit" },
  { name: "Sam", species: "hobbit" },
  { name: "Merry", species: "hobbit" },
  { name: "Pippin", species: "hobbit" },
  { name: "Gandalf", species: "istar" },
  { name: "Legolas", species: "elf" },
  { name: "Gimili", species: "dwarf" },
  { name: "Aragorn", species: "human" },
  { name: "Boromir", species: "human" }
])

// Perform a simple query and display the output.
rethinkdb.connect().then(function(conn) {
  return rethinkdb.db("test").table("fellowship")
          .filter({species: "hobbit"}).run(conn)
    .finally(function() { conn.close(); });
})
.then(function(cursor) {
  return cursor.toArray();
})
.then(function(output) {
  console.log("Query output:", output);
})
.error(function(err) {
  console.log("Failed:", err);
});


//query.run().then(function(result) {
//  console.log(result);
//});

//rethinkdb.db('test').table('data').run().then(function(error, result) {
//	console.log(result);
//});


/*
rethinkdb.db('test').tableCreate('authors').run().then(function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
});
*/