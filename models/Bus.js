const mongoose = require('mongoose');
// const db = require('../config/database');

const Schema = mongoose.Schema;
const busSchema = new Schema({
   company:{
       type: String,
       required: false
   },
   from:{
    type: String,
    required: false
},
to:{
    type: String,
    required: false
},
date:{
    type: String,
    required: false
},
quantity:{
    type: Number,
    required: false
},
price:{
    type: String,
    required: false
},
},{timestamps: true});;

const BusData = mongoose.model('Bus', busSchema)
module.exports = BusData;
