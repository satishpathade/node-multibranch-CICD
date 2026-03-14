const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Jenkins Multibranch CI/CD Pipeline Running")
})

app.get("/health", (req, res) => {
  res.json({ status: "OK" })
})

module.exports = app