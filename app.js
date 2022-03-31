const express = require('express');
const app = express();
const hbs = require('express-handlebars')
const bodyparser = require('body-parser')
const mysql = require('mysql')

const port = process.env.PORT || 5000;

//parsing middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');



const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'ab1',
    connectTimeout: 10


})

pool.query('select * from studentinfoc', (err, result, fields) => {
    if (err) {
        return console.log(err)
    }
    else {
        

        console.log(result)
    }

})

app.get('', (req, res) => {
    res.render('home')
})
const router = require('./Routes/User');
const res = require('express/lib/response');

app.use('/', router)



app.listen(port, () => {
    console.log(`listen on port number ${port}`)
})