const mongoose = require("mongoose")

const userCities = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref:"user",required:true},
    ip: {type:String,required:true},
    city:{type:String,required:true}
},{timestamps:true})


searchSchema.index({ ip: 1 }, { unique: true })

module.exports = mongoose.model("search",searchSchema)