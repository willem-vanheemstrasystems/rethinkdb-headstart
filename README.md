# rethinkdb-headstart
RethinkDB - Headstart

Based on RethinkDB

Watch videos here https://www.youtube.com/user/RethinkDB

- Data Modeling in RethinkDB (https://www.youtube.com/watch?v=vJtDNRsUozk)

See also https://rethinkdb.com/docs/guide/javascript/

##Install RethinkDB 

Follow the instructions from the site.

##Running RethinkDB

RethinkDB is executed from the command line. 

For Windows, you’ll need to start the Windows command shell.

•Press Win + X and click “Command Prompt”; or

•Open the Start Menu, click “Run,” and type “cmd” ENTER

Use the cd command to go to the directory that you unpacked rethinkdb.exe in.

````
C:\Users\Me\>cd rethinkdb

C:\Users\Me\rethinkdb\>
````

Then, you can start RethinkDB with its default options.

````
C:\Users\Me\rethinkdb\>rethinkdb.exe
````

You can also use any of the command line options to control configuration (as well as specify a configuration file).

To start with a specific data directory:

````
C:\Users\Me\rethinkdb\>rethinkdb.exe -d C:\Users\Me\rethinkdb\mydata\
````

To specify a server name:

````
C:\Users\Me\rethinkdb\>rethinkdb.exe -n myservername
````

###Administrative web console

By default the RethinkDB administrative web console runs on localhost, port 8080. After having started RethinkDB, open a web browser window and surf to http://localhost:8080

You can type RethinkDB queries (in **ReQL**) into the text field on the **Data Explorer** tab and run them to see the output.

Here is how you add a table to the testdatabase:

````
r.db("test").tableCreate("fellowship")
````

In addition, here is how you add JSON documents to the newly created table:

````
r.table("fellowship").insert([
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
````

Finally, here is how you fetch the fellowship's hobbits:

````
r.table("fellowship").filter({species:"hobbit"})
````

For more see the tutorial 'An introduction to building ...' listed below.

###Node.js Driver for RethinkDB

An advanced Node.js driver for RethinkDB with a connection pool, support for streams etc. 
See https://github.com/neumino/rethinkdbdash

Tutorials:

- An introduction to ReQL (http://rethinkdb.com/docs/introduction-to-reql/)
- An introduction to building realtime apps with RethinkDB (https://jaxenter.com/building-realtime-apps-rethinkdb-115254.html)



