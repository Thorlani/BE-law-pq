const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 3005

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ limit: "50mb", extended: false }));

//import routes
const contract = require('./routes/contract')
const constitutional = require('./routes/constitutional')
const legal = require('./routes/legal')
const getContract = require('./routes/getContract')
const getConstitutional = require('./routes/getConstitutional')
const getLegal = require('./routes/getLegal')
const getLC = require('./routes/getLC')
const getCLC = require('./routes/getCLC')
const getCC = require('./routes/getCC')
const postCC = require('./routes/postCC')
const postLC = require('./routes/postLC')
const postCLC = require('./routes/postCLC')


const uri = process.env.DB_CONNECTION

mongoose.connect( uri, { useNewUrlParser: true }, () => console.log('connected to db'))

//route middlewares
app.use('/api/postContract', contract)
app.use('/api/postConstitutional', constitutional)
app.use('/api/postLegal', legal)
app.use('/api/getContract', getContract)
app.use('/api/getConstitutional', getConstitutional)
app.use('/api/getLegal', getLegal)
app.use('/api/getLC', getLC)
app.use('/api/getCLC', getCLC)
app.use('/api/getCC', getCC)
app.use('/api/postCC', postCC)
app.use('/api/postLC', postLC)
app.use('/api/postCLC', postCLC)


app.get('/', (req, res) => {
    res.send("My online Law Past Question API")
})


app.listen(PORT, () => {
    console.log('Server is up and running');
})