const express = require('express')
const app = express()
const router = express.router;
const path = require('path');



app.use(express.static("./public"))

const port = 3000;



const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();

module.exports = router;