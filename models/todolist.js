const mongoose = require('mongoose');

const todoSchena=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

const ToDoList=mongoose.model('ToDoList',todoSchena);
module.exports=ToDoList;