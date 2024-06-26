const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
// CONFIGURE SESSION
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));

const port = process.env.PORT || 3000;
const routes = require('./routes/userRoutes');
app.use('/', routes);
app.listen(port, () => console.log(`Listening on port: ${port}`));