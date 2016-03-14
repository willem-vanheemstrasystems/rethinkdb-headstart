/* 
 * server.js 
 */

var express = require('express');
// See also https://github.com/neumino/rethinkdbdash

//var rethinkdb = require('rethinkdbdash')({
//  pool: false, // as soon as you execute the module, you will create a default connection pool (except if you pass  {pool: false} 
//  cursor: true,
//  servers: [{host: 'localhost', port: 8080}] // Use the values of your running RethinkDB instance
//}); // You need to execute the module when you import it.

// With the official driver:
var rethinkdb = require('rethinkdb');

var app = express();

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
// The connect method establishes a connection to RethinkDB. 
// It returns a connection handle, which you provide to the run command when you want to execute a query. 
// The example below finds all of the hobbits in the fellowship table and then displays their respective JSON documents in your console. 
// It uses promises to handle the asynchronous flow of execution and to ensure that the connection is properly closed when the operation completes.
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

app.listen(8090);

console.log("App listening on port 8090");

// An API endpoint that lets the user fetch all of the fellowship members of the desired species.
// The final path segment in the URL route represents a variable, 
// which we pass to the filter command in the ReQL query in order to obtain just the desired documents. 
// After the query completes, the application relays the JSON output to the user. 
// If the query fails to complete, then the application will return status code 500 and provide the error.
// Browse to e.g http://localhost:8090/fellowship/species/hobbit
app.get("/fellowship/species/:species", function(req, res) {
  rethinkdb.connect().then(function(conn) {
    return rethinkdb.db("test").table("fellowship")
            .filter({species: req.params.species}).run(conn)
        .finally(function() { conn.close(); });
  })
  .then(function(cursor) { return cursor.toArray(); })
  .then(function(output) { res.json(output); })
  .error(function(err) { res.status(500).json({err: err}); })
});
