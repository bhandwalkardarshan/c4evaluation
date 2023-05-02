const {Router} = require("express")
const {getIpInfo} = require("../controllers/ip.controller")
const {validator} = require("../middlewares/validatorIP")

const ipRouter = Router()


ipRouter.get("getIP",validator,getIpInfo)

module.exports = {ipRouter}