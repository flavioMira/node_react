const express = require('express');
const router = require('../api/routes/router.js');
require('dotenv').config();

const app = express();
app.use(router)


app.listen(process.env.URL_PORT, ()=>{
    console.log(`Server running on ${process.env.APP_URL}:${process.env.URL_PORT}`)
})