
                                       // W3D2 Assignment


// const express = require('express');
// const router = express.Router();
// // const UserModel= require("../models/userModel.js")
// // const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// // router.post("/createUser", UserController.createUser  )

// // router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.get("/bookList", BookController.bookList )

// router.get("/getBooksInYear", BookController.getBooksInYear)

// router.get("/getParticularBooks", BookController.getParticularBooks)

// router.get("/getXINRBooks", BookController.getXINRBooks)

// router.get("/getRandomBooks", BookController.getRandomBooks)

// module.exports = router;


//  router.post("/createNewAuthor", authorController.createNewAuthor)
//  router.post("/createNewBook", authorController.createNewBook)
//  router.get("/allBooks", authorController.allBooks)
//  router.get("/updatedBookPrice", authorController.updatedBookPrice)
//  router.get("/authorsName", authorController.authorsName)



                                      // W3D3 Assignment

    
 

//  const authorController = require ("../controllers/authorController.js")




// router.post("/createAuthor", authorController.createAuthor)
// router.post("/createPublisher", authorController.createPublisher)
// router.post("/createBook", authorController.createBook)
// router.get("/newBook", authorController.newBook)
// router.put("/recieveBooks",authorController.recieveBooks)






                                  //          W4D1 Assignment

        
//  const express = require('express');
//  const router = express.Router();

//  const batchController = require ("../controllers/batchController.js")



//  router.post("/createBatch", batchController.createBatch)

//  router.post("/createDeveloper", batchController.createDeveloper)

//  router.get("/scholarshipDevelopers", batchController.scholarshipDevelopers)

//  router.get("/developers", batchController.developers)
 

//  module.exports= router;


                                                 

                                          

//                                    //  W4D2  Assignment


//  const express = require('express');
//  const router = express.Router();


//  router.get('/test',function(req,res){                           // First API
//      res.send("Welcome To World Of MongoDb")
//  });



//  router.get('/take',function (req,res) {                         // Second API
//      res.send(" Hello Everyone Namaste")
//  });

//  module.exports= router;




                                              // W4D3 Assignment

    
    const express = require('express');
  const router = express.Router();
  const mw = require ("../Middleware/middleware.js");
  const userController = require ("../controllers/userController.js");





  router.post("/createProduct", userController.createProduct)

  router.post("/createUser",mw.checkFreeUser, userController.createUser)
  
  router.post("/createOrder", mw.checkFreeUser, userController.createOrder)
  

  module.exports = router;