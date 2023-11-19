import http from "http"

const PORT = 3000

const routes = {
  "/": "Book shop server",
  "/books": "In the books route",
  "/authors": "In the authors route"
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end(routes[req.url]) // req.url returns whichever route is accessed at localhost:PORT
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
