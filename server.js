const express = require("express")
const app = express()
const ejs = require("ejs")
const homeControl = require("./controllers/homeControl.js")
const port = process.env.PORT || 5000

app.set("view engine", "ejs")
app.use("/assets", express.static("public"))

app.get("/:username", homeControl)


app.listen(port,console.log(port))
