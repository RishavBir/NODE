

 const jwt = require("jsonwebtoken");
 const userModel = require("../models/userModel");                    
 
 
 const createUser = async function (req, res) {                       //  first answer

                                            
 let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAttribute);
  res.send({ msg: savedData });
    
};

//********************************************************************************************************* */


const loginUser = async function (req, res) {                          // second Answer

 let userName = req.body.emailId;
 let password = req.body.password;
    
 let user = await userModel.findOne({ emailId: userName, password: password });
 if (!user)
      return res.send({
    status: false,
       msg: "username and password are incorrect",
       });


 let token = jwt.sign                                           // second part { generate token }
   (
     {
    userId: user._id.toString(),
    batch: "uranium",
   organisation: "FunctionUp",
     },
   "functionup-uranium"              // secret
   );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
  };

//******************************************************************************************************8 */


  const getUserData = async function (req, res)                       // THIRD SOLN
   {                                                                                        
     
    let userData = req.body;
    let userDetails = await userModel.findById({_id: userId})
      res.send({ status: true, data: userDetails });
    };
    

    //*************************************************************************************************** */

     
    
    const updateUser = async function (req, res)   {                            // fourth solution
    
    try{                                                                                        
      
      let userId = req.params.userId
      let userData = req.body;

      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);

      res.status(200).send({ status: true, data: updatedUser });
      
    }
    catch(err){

      console.log(err.message)
      res.send({ status:"error", msg:err.message})
    }

  };
  
      //*********************************************************************************************** */


      const deleteUser = async function (req, res)                               // fifth solution
    
    {                                                                                        
        
      let userData = req.body;

      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {isDeleted:true},{new:true,upsert:true});
        res.send({ status: true, data: updatedUser });
      
    };
    

    //**************************************************************************************************** */

    const userLog = async function (req, res)                               
    
    {                                                                                        
        
      let userData = req.body;

      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{ age: userData.age}}, {new:true});
        res.send({ status: true, data: updatedUser });
      
    };


  

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
 module.exports.updateUser = updateUser;
 module.exports.deleteUser= deleteUser;
 module.exports.userLog = userLog