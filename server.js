const express = require("express")
const app = express()
const ejs = require("ejs")
const homeControl = require("./controllers/homeControl.js")

app.set("view engine", "ejs")
app.use("/assets", express.static("public"))

app.get("/:username", homeControl)


app.listen(5700,console.log(5700))