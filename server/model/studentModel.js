const mongoose = require('mongoose');

const Student = new mongoose.Schema(
    {
        name:{type:String,require:true,trim:true},
        usn:{type:String,require:true,trim:true,unique:true},
        batch:{type:Number,require:true,trim:true},
        semester:{type:String,require:true,trim:true},
        branch:{type:String,require:true,trim:true}
    },
    {
        collection:'student',
        timestamps:true
    }
);

module.exports = mongoose.model('Student',Student);