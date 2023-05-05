const mongoose = require("mongoose")

const countrySchema = new mongoose.Schema({
    id: String,
    lemonade: Number,
    lemonadeFormat: String
})

module.exports = mongoose.model("Country", countrySchema)
