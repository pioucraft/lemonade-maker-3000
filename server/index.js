const express = require("express")
let app = express()
const port = 3000

const mongoose = require("mongoose")
const Country = require("./Country")
mongoose.connect('mongodb://127.0.0.1:27017/test');

const async = require("async")

const addCookiesQueue = async.queue(async (task) => {
    await Country.insertOne({id: "test1"})
    await Country.findOneAndUpdate({id: "test"}, {lemonade: 1})
})

app.all("/api/add-cookies/:numberOfCookies", (req, res) => {
    addCookiesQueue.push({req, res})
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
