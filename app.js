const express = require('express')
const app = express()
const router = express.Router();
const path = require('path');
const navigation = require('./Routes/navigation')



app.use(express.static("./Public"))
// app.use('/',navigation)

const newRouter= require('./Routes/navigation')
app.use(newRouter)
const port = 3000;



const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();

module.exports = router;