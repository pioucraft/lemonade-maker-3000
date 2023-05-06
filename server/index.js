const express = require("express")
let app = express()
const port = 3000

const mongoose = require("mongoose")
const Country = require("./Country")
mongoose.connect('mongodb://127.0.0.1:27017/test');

const async = require("async")

const clickQueue = async.queue(async (task) => {
    if((Number(task.req.params.clicks) <= 0)) {
        task.res.send("number can't be negative")
    }
    else if(Number(task.req.params.clicks) > 800) {
        task.res.send("error, too much clicks")
    }
    else{
        let ip = getIp(task.req)
        let country = getCountry(ip)
        let lemonade = (await Country.findOne({id: country})).lemonade
        lemonade += Number(task.req.params.clicks)
        await Country.findOneAndUpdate({id: country, lemonade: lemonade})
        task.res.send(String(lemonade))
    }
}, 1)

app.all("/api/add-lemonade/:clicks", (req, res) => {
    clickQueue.push({req, res})
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})

function getIp(req) {
   return req.ip.replace("::ffff:", "") 
}

function getCountry(ip) {
    return "ch"
}