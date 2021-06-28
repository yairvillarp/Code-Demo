const express = require('express')
const multer = require('multer')
const UploadController = require('./controllers/Upload')

require('./model/Db')

const app = express()
const upload = multer({dest: 'tmp/'})

app.get('/', UploadController.getall);
app.post('/upload', upload.single('csv'), UploadController.upload)

module.exports = app;
