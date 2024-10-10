const express = require('express');
const connection = require('./db/db');
const cors = require('cors');
const userDataRouter = require('./router/userDataRouter');
const userRouter = require('./router/userRouter');

require('dotenv').config();

const app = express();

app.use(
    cors({
      origin: ["http://localhost:3000"],
    })
  );
  
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Hello")
})



app.use('/', userRouter)
app.use('/user', userDataRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, async()=>{
    await connection;
    console.log(`server started on http://localhost:${PORT}`);
})