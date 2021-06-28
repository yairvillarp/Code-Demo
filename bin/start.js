require('dotenv').config()
const app = require('../index')
const port = process.env.PORT || 3000

app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`)
})