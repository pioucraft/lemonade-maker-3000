const express = require("express")
let app = express()
const port = 3000

const mongoose = require("mongoose")
const User = require("./User")

const async = require("async")
const crypto = require("crypto")


const registerQueue = async.queue(async (task) => {
    task.req.params.password = crypto.createHash
})

app.all("/api/register/:username/:pasword", (req, res) => {
    registerQueue.push({req, res})
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
