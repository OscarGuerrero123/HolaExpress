const express = require('express')

const app = express()

// http://localhost:3000/
app.get('/', (req, res) => {
    response.send("Hello Word!")
})



app.listen(3000, ()=> (console.log('listening on port 3000')))