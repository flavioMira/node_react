const express = require('express');
const cors = require('cors');
const router = express.Router()
require('express-group-routes')


router.use(express.json());
router.use(cors());



//Rotas api
router.group("/api/v1", (router) => {

    //rotas
    router.get('/', (req, res) => {
        res.send('Hello World!')
    })

    //rotas user
    router.group("/user", (router) =>{
        router.get('/', (req, res) => {
            res.send('user!')
        })
    })

});


module.exports = router