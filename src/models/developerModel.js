
const mongoose = require( 'mongoose');

const developerSchema = new mongoose.Schema ({

        name: String,
		gender: String,
		percentage: Number,
        batch: {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Batch"

        },
    },

     { timestamps: true}
)

module.exports = mongoose.model('Developer', developerSchema)
