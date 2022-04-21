
                                      // W3D2 Assignment


// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     year: Number,
//     prices: {
//         indianPrice: String,
//         dollarPrice: String,
//     },
//     totalPages: Number,
//     stockAvailable: Boolean
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users


                                  

                                            // W3D3 Assignment



//  const mongoose = require( 'mongoose');

//  const bookSchema = new mongoose.Schema(
//         {

//     name: String,
//     author_id : {
//              type:Number,
//               },
//         price: Number,
//         rating: Number
//        },

//         {timestamps : true}
        
//         )


//   module.exports = mongoose.model('Book',bookSchema)  //users




                                       //     W3D4 Assignment





  const mongoose = require( 'mongoose');

 const bookSchema = new mongoose.Schema ({
    
         Name: String,
         author: {
               type: mongoose.Schema.Types.ObjectId,
               ref : "Author",
         } ,
         publisher:{
                  type:mongoose.Schema.Types.ObjectId,
                  ref: "Publisher"
         },
         year : Number,
         price: Number,
         ratings: Number,
         isHardcover: Boolean
      },

      { timestamps: true}
)

module.exports = mongoose.model('Book',bookSchema)

