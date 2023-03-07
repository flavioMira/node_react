const express = require('express');
const router = require('../api/router.js');
require('dotenv').config();

const app = express();
app.use(router)


app.listen(process.env.URL_PORT, ()=>{
    console.log(`Server running on port ${process.env.URL_PORT}`)
})