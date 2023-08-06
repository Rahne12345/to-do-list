const express = require('express')
const app = express()
const port = 8000
const db=require('./config/mongoose');
const Todolist=require('./models/todolist');

app.set("view engine","ejs");
app.set("views","views");
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true }));

// for get request
app.get('/',async function(req,res){
    try {
        const todolist = await Todolist.find();
        return res.render("index",{
            todo_list: todolist
        });
      } catch (err) {
        console.log("Some error in db : ",err);
    }
})

// for post request
app.post('/new-todo-list',async function(req,res){
    console.log(req.body);
    try {
        await  Todolist.create({
            title: req.body.title,
            status: req.body.category,
            date: req.body.date
        });
        return res.redirect('back');
      } catch (err) {
        console.log(`some error in here: ${err}`);
    }
});

// delete 
app.get('/delete-list',async function(req,res){
    let id=req.query.id;
    try {
        await Todolist.findByIdAndDelete(id);
        return res.redirect('back');
      } catch (err) {
        console.log(`some error in here: ${err}`);
    }
});

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});