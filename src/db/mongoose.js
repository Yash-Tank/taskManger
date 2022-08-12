const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')



// const task = new Task({
//     description: '     Eat lanuch'
// })

// task.save().then(() => {
//     console.log(task);
// }).catch((error) =>{
//     console.log(error);
// })