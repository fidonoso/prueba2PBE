const express = require('express')
const router = express.Router();
const main = require('../controllers/MainController')

//MainController
router.post('/createclient',main.createclient) //CREATE
router.get('/readallusers', main.readAllUsers) //READ
router.put('/updateclient/:id', main.updateClient)//UPDATE (usa id en el params y los datos en el body)
router.delete('/deleteclient/:id', main.deleteClient)//DELETE (solo con id en la url)

router.get('/readuser/:id', main.readuser) //READ (leer un cliente)
module.exports = router;