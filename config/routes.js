const express = require('express')
const router = express.Router()
const notesController = require('../app/controllers/notesControler')
const categoryController =require('../app/controllers/categorysController')

router.get('/notes', notesController.list)
router.get('/notes/show/:id', notesController.show)
router.post('/notes/new', notesController.create)
router.put('/notes/:id', notesController.update)
router.delete('/notes/:id', notesController.destroy)

router.get('/category',categoryController.list)
router.post('/category',categoryController.create)
router.get('/category/show/:id',categoryController.show)
router.put('/category/edit/:id',categoryController.update)
router.delete('/category/:id',categoryController.destroy)

module.exports = router