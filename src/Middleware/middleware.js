

const checkFreeUser = function(req,res,next) {

    let header = req.body.isFreeAppUser
    if( header != undefined) {
        next()
    }
    else {
            res.send(" isFreeAppUser property is require")
    }

    console.log(req.body)
    next()
}

module.exports.checkFreeUser = checkFreeUser