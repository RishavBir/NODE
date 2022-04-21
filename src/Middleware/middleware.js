

const checkFreeUser = function(req,res,next) {



    let header = req.headers["isfreeappuser"]

    console.log(header)

    if( header) {
        next()
    }
    else {
            res.send(" isFreeAppUser property is require")
    }

    console.log(req.body)
    
}

module.exports.checkFreeUser = checkFreeUser