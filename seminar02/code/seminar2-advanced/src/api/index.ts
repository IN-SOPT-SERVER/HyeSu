import express, { Router } from "express";

const router: Router = express.Router(); 

router.use("/members", require("./members"))
router.use("/user", require("./user"))
router.use("/blog", require("./blog"))
router.use("/comment", require("./comment"))
router.use("/movie", require("./movie"))

module.exports = router; 
