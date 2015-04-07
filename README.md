silversurfer-client
====================

Its a client for silversurfer-server. The client and server together form a basic CRUD application and can be used as a seed MEAN application.


Prerequisites
--------------

silver-surfer server is running.

Starting the application
-------------------------

install dependencies and create bundle

$ bower install && npm install && browserify app.js -o dist/app.js 

To start the application

$ http-server
