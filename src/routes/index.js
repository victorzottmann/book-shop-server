import express from "express"

import bookRoutes from "./bookRoutes.js"
import authorRoutes from "./authorRoutes.js"

/**
 * express.json() is a middleware built into express used to parse requests with JSON payloads.
 * When a request is sent by the client, it'll parse the JSON data and make it available
 * in the req.body property of the requested object.
 * 
 * For example, given this book:
 * {
 *    "id": 3,
 *    "title": "The Silmarilion"
 * }
 * 
 * The id can be accessed in req.body.id
 * The title can be accessed in req.body.title
 * 
 * Finally, app.use() mounts middleware functions, which are functions that have access to
 * the request and response objects, req and res. Since express.json() is a global middleware,
 * it'll be applied to all routes after the app.use() statement below.
*/
const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Book shop server"))
  app.use(express.json(), bookRoutes, authorRoutes)
}

export default routes
