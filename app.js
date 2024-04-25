const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


const port = process.env.PORT || 5000;
const routes = require('./routes/userRoutes');
app.use('/', routes);
app.listen(port, () => console.log(`Listening on port: ${port}`))