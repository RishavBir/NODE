const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const TempController= require("../controllers/tempController")
const MemeController= require("../controllers/memeController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)

// router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/getByDistrict", CowinController.getDistrictVaccinationSession)
router.get("/getSortedCities" , TempController.getSortedCities)
router.post("/createMeme" , MemeController.createMeme)


module.exports = router;