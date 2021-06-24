require('dotenv').config()
const express = require('express')
const multer = require('multer')
const UploadController = require('./controllers/Upload')

require('./model/Db')

const app = express()
const port = process.env.PORT || 3000
const upload = multer({dest: 'tmp/'})

app.get('/', UploadController.getall);
app.post('/upload', upload.single('csv'), UploadController.upload)

app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`)
})