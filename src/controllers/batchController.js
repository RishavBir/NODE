

const batchModel = require ("../models/batchModel.js")
const developerModel = require ("../models/developerModel.js")
     
     


const createBatch = async function ( req,res){                                             // First API

    const reqBatch = req.body;
    const SavedData = await batchModel.create( reqBatch)
   res.send({ msg:SavedData})
  }



  const createDeveloper = async function ( req,res){                                      // Second API

    const reqDeveloper = req.body;
    const SavedData = await developerModel.create( reqDeveloper)
   res.send({ msg:SavedData})
  }



  const scholarshipDevelopers = async function (req, res) {                               // Third API

    let scholar= await developerModel.find({gender:"female", percentage: { $gte:  70 }}) 

    res.send({msg: scholar})

}



const developers =async function(req,res){                                                 // Fourth API
    let data = req.query
    let batchName = data.program
    let reqPercent = data.percentage
    let reqBatch = await batchModel.find({ name: batchName}).select({ _id:1})
     
    let result= await developerModel.find({ percentage:{$gte:reqPercent}, batch:reqBatch}).populate('batch')
    res.send({ data:result})
}



  module.exports.createBatch = createBatch
  module.exports.createDeveloper = createDeveloper
  module.exports.scholarshipDevelopers = scholarshipDevelopers
  module.exports.developers = developers
