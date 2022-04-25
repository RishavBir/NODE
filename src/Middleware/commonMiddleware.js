
const jwt= require("jsonwebtoken")
const userModel= require("../models/userModel")


const authToken = function (req,res,next ){

    let token = req.headers["x-Auth-token"];              // original Token....upperCase

    if (!token) token = req.headers["x-auth-token"];      // token generate from outsider.....lowerCase
       
       if (!token) return res.send({ status: false, msg: "token must be present" });
       
        console.log(token);

 // Here we have to check that means we have to verify that the request must have x-auth-token. 
// and we know verify have two inputs , one is token need to be decoded and other is same secret with which token was generated.
      
   
 let decodedToken = jwt.verify (token, "functionup-uranium");     // here "functionup-uranium" is the secret
   
   if (!decodedToken)                             
    return res.send({ status: false, msg: "token is  invalid" });

    else{
            next()
       }
}

const userExist = async function(req,res,next){

  try{

    let userId = req.params.userId;
      let user = await userModel.findById(userId);
      if (!user) {
      return res.status(400).send({ msg: "UserId cannot be empty"})
      }
      
      let userDetails = await userModel.findById(userId);
      if(!userDetails)
      return res.status(404).send({ status: false, msg: " NO such user exists"});
      next()
    }

      catch (err){

        console.log(err.message)
        res.send({ status: "error", msg: err.message})
      }
}


module.exports.authToken = authToken
module.exports.userExist= userExist
