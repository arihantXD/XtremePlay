const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type : String, 
        required : true
    },
    description : {
        type : String
    },
    url: {
        type : String, 
        required : true
    }
})


const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;