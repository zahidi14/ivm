const express = require("express");
const router = require("./routes/route");
// const route  = require("./routes/route");
require("dotenv").config();
const app = express();
const PORT = 4000;
app.use(express.json());
app.use("/", router)

// app.use("/api", route)
app.listen(PORT, ()=>{
    console.log(`connected on port ${PORT}`)
})

app.get('/', (req,res)=>{
    res.send("coook")
})