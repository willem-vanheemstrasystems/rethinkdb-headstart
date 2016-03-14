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

###Node.js Driver for RethinkDB

An advanced Node.js driver for RethinkDB with a connection pool, support for streams etc. 
See https://github.com/neumino/rethinkdbdash



