const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

const port = process.env.PORT || 3000

//handlebars set up 
app.set('view engine', 'hbs')

//setup static dir to serve.
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Gangadhar'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App',
        name: 'Gangadhar'
    })
})


app.get('/products', (req, res) => {
    if (!req.query.search){
        return res.send({
            error: 'You must provide search term'
        })
    }
    res.send('')
})

app.get('/test', (req, res) => {
    res.send({
        name: 'Gangadhar',
        age: 35
    })
})

app.get('*', (req, res) => {
    res.send('My 404 Page...')
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})



console.log(__dirname)
console.log(path.join(__dirname, '../public'))