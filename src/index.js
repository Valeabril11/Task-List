const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/tasks.routes');
const cors = require('cors'); //para conectar mi back con el front
const app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoutes);
app.use((err,req,res,next)=>{
    return res.json({
        message: "Este error puede ser poruqe se intenta duplicar la tarea",
    })
})

app.listen(3000)
console.log('Server on port 3000')
