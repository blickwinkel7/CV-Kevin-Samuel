"use strict"

const express = require("express")
const app = express()
const port = 3000
const Controller = require("./controllers")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:false}))

app.get("/", Controller.homePage)

app.listen(port, () => {
    console.log(`listen to port: ${port}`)

})