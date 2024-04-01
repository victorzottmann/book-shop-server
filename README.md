# Book Shop Server

This is a simple book shop REST API server built with Node.js, Express.js, and MongoDB for practice purposes.

## How to run

- Clone the project
- Run `npm install` to install all the dependencies
- Create a MongoDB database to store and manage the data 
- Add a `.env` file in the root directory to store the connection string required to connect to your database
- Name the connection string as `DB_CONNECTION_STRING=<your_mongodb_connection_string>`
- Run `npm run dev` to start load the server.

## Features

This REST API server is organised by models, controllers, and routes. The reason for this is to make it easier to maintain and simulate the MVC (Model, View, Controller) architecture. 

The database configuration is abstracted in `src/config/database.js`, and the connection itself is made in `src/app.js`.

In the `routes` directory, you will find all the current routes organised by books and authors, clearly showcasing how the API should be called and what data is returned by the controller methods.
