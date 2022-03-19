const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
const port = 5000

// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/img', express.static(__dirname + '/public/img'))

// Templating engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// ody parser
app.use(bodyParser.urlencoded({extended:true}))
// Routes
const newsRouter = require('./src/routes/news')
app.use('/', newsRouter)
app.use('/article', newsRouter)

app.listen(port, ()=>console.log(`Listning on port ${port}`))