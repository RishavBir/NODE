// const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData




                                             // W4D3 ASSIGNMENT




const productModel = require("../models/productModel")
const userModel= require("../models/userModel")
const orderModel = require ("../models/orderModel")






const createProduct= async function (req, res) {                                  // First API
    let data= req.body
    let savedData= await productModel.create(data)
    res.send({msg: savedData})
   }




const createUser= async function (req, res) {                                    // Second API
 let data= req.body
 let savedData= await userModel.create(data)
 res.send({msg: savedData})
}




//    const createOrder= async function (req, res) {                                // Third API
//    let order =req.body
//    let savedData = req.headers
//    if(data[('isFreeAppUser'.toLowerCase())]== "true") {

//     order.amount =0
//     order.isFreeAppUser = true
//     let a =await orderModel.create(order)
//     res.send({ savedData:a})
//    }
//    else{
//        let l= await productModel.find({ _id:order.productId}).select({ price:1, _id:0})
//        let balnc = await userModel.find({ _id:order.userId}).select({ balance:1,_id:0})
//        console.log(balnc)
//        console.log(l)
//        if (balnc[0].balance>=l[0].price){
//            balnc[0].balance = balnc[0].balance-l[0].price;
//            await userModel.findOneAndUpdate({ _id:order.userId}, { balance:balnc[0].balance})
//            console.log(balnc[0].balance)
//             order.amount=l[0].price;
//             order.isFreeAppUser = false;
            
//             let a = await orderModel.create(order)
//             res.send ({ savedData : a})
//        }
//     }
//   }


                    


                         //    ( OR METHOD TWO ) for creatind the third API


   

const createOrder = async function(req,res){                        
    let data = req.body
    // let userId = req.body.userId                          
    // let productId = req.body.productId
    
    console.log("I am in Controller")
    const { userId, productId } = data 

    let header = req.headers["isfreeappuser"]
    console.log(header)
    let price = await productModel.find({productId})
    let userValidation  = await userModel.exists({userId})
    let productValidation = await productModel.exists({productId})
    if(userValidation){
        if(productValidation){
           // let purchase = await orderModel.create(data)
            if(header == "true"){
                req.body.isFreeAppUser = header
                req.body.amount = 0
                let purchase = await orderModel.create(req.body)

                res.send({success : purchase})

               // await userModel.find({_id : userId}).update({balance: `${balance}-${price}`},{new:true})

            
            }else{
                console.log("else")
                //let amount = price.price
                req.body.isFreeAppUser = header
                let abc= 100
                req.body.amount = abc ; //price.price
                // req.body.amount = 0
                let purchase = await orderModel.create(req.body)

                res.send({success : purchase})
                
            }
            
        } else{
            res.send({err: "the product is not present"})}
    }else{
        res.send({alert: "you are not a registered user, please register"})}
}



                      
   module.exports.createProduct= createProduct
   module.exports.createUser= createUser
   
   module.exports.createOrder= createOrder