
 

// const createNewAuthor = async function ( req,res){

//     const reqAuthor = req.body;
//     const SavedData = await authorModel.create( reqAuthor)
//     res.send({ msg:SavedData})
// }





// const  createNewBook = async function ( req,res){


//     const reqbook= req.body;
//     const Saved = await bookModel.create( reqbook)
//     res.send ({ msg: Saved})
// }




// const  allBooks = async function ( req,res){


//     const authorDetails = await authorModel.find( {author_name : "Chetan Bhagat"})
//     const id= authorDetails[0].author_id
//     const booksName = await bookModel.find({ author_id: id}).select({name:1})
//     res.send ({ msg: booksName})

// }






// const  updatedBookPrice = async function ( req,res){


//     const bookDetails = await bookModel.find({ name: "Two states"})
//     const id= bookDetails[0].author_id
//     const authorName= await authorModel.find({author_id:id}).select({author_name:1, _id:0})

//     const bkName = bookDetails[0].name
//     const updatedPrice = await bookModel.findOneAndUpdate({name:bkName},{price:90}).select({price :1,_id:0})

//     res.send ({ msg: authorName, updatedPrice })
// }





// const authorsName = async function (req,res){

//     const booksId = await bookModel.find({price:{$gte:50, $lte: 100}}).select({ author_id:1, _id:0})
//     const id = booksId.map(inp => inp.author_id)

//     let temp =[]
//     for (let i=0; i<id.length; i++){
//         let a =id[i]
//         const author =await authorModel.find({ author_id:a}).select({ author_name: 1, _id: 0})
//         temp.push(author)
//     }

//     const authorName= temp.flat()
//     res.send({ msg: authorName})
// }


// module.exports.createNewAuthor= createNewAuthor
// module.exports.createNewBook= createNewBook
// module.exports.allBooks= allBooks
// module.exports.updatedBookPrice= updatedBookPrice
// module.exports.authorsName= authorsName

                             




                                              // W3D4 Assignment






    const authorModel = require ("../models/authorsModel.js")
     const bookModel = require ("../models/bookModel.js")
     const publisherModel = require ("../models/publisherModel.js")
     

  const createAuthor = async function ( req,res){                                          // First API

   const reqAuthor = req.body;
   const SavedData = await authorModel.create( reqAuthor)
  res.send({ msg:SavedData})
 }


 const createPublisher = async function ( req,res){                                         // Second API

    const reqPublisher = req.body;
    const SavedData = await publisherModel.create( reqPublisher)
    res.send({ msg:SavedData})
}


const createBook = async function ( req,res){                                               // Third API

    let data = req.body 
    let a_check = await authorModel.find({_id: data.author}).select("_id")
    let b_check = await publisherModel.find({_id: data.publisher}).select("_id") 

    if(!a_check.length && !b_check.length)
    res.send({ msg: "Author and Publisher Id fields dont match our data , hence invalid"})
    else if(!a_check.length && b_check.length)
    res.send ({ msg: "Author Id field doesnt match our data, hence invalid"})
    else if (a_check.length && !b_check.length)
    res.send ({ msg: "PublisherId field doesnot match our data, hence invalid"})
    else{
        if (!await bookModel.exists(req.body)){
            let savedData= await bookModel.create(req.body)
            res.send ({ msg: savedData})

        } else res.send ({ msg: "This Book already exists in the collection"})
    }
}

                                        

const newBook = async function(  req,res){                                                     // Fourth API
    
    let allBooks = await bookModel.find().populate(['author','publisher'])
    res.send ({ msg:allBooks});
}



                        

const recieveBooks = async function (req,res){

  const booksId = await bookModel.updateMany({ isHardcover:false})
  const hardcover=await publisherModel.find({ $or :[{ name:"Penguin"}, {name:"Harper Collins"}]}).select({_id:1})

  let b=await authorModel.find({ rating:{$gt:3.5}}).select({ _id:1})
  let ab = await bookModel.updateMany({ author:b},{$inc:{ price:10}})

  res.send ({ msg:booksId , ab})
}


module.exports.createAuthor= createAuthor
 module.exports.createBook= createBook
module.exports.createPublisher= createPublisher
module.exports.newBook= newBook
module.exports.recieveBooks= recieveBooks

