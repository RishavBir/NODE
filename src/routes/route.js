
const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const userController= require("../controllers/userController")

const mW= require("../Middleware/commonMiddleware")

router.get("/test-me", function (req, res) {
    res.send(" Hello World")
})




router.post("/createUser", userController.createUser  )

 router.post("/login", userController.loginUser)



 router.get("/users/:userId",mW.authToken, userController.getUserData)


try{
router.put("/users/:userId", mW.authToken,mW.userExist,userController.updateUser)
}
catch(err){

    console.log(err.message)
    res.send(err.message)

}


router.delete("/users/:userId", mW.authToken,mW.userExist,userController.deleteUser)

router.put("/users/:userId", mW.authToken,mW.userExist,userController.userLog)




module.exports = router;