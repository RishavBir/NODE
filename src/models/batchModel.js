
const mongoose = require( 'mongoose');

const batchSchema = new mongoose.Schema ({

    name: String,
    size: Number,
    program: String

    },

     { timestamps: true}
)

module.exports = mongoose.model('Batch',batchSchema)
