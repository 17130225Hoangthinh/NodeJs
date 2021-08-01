const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const morgan= require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');


app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));

//CONFIG HANDLEBARS
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'/resources/views'));
route();

 app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      });
