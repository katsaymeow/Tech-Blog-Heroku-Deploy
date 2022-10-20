const path = require('path');
const express = require('express');
const session = require('express-session');
const exhdbars = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('/utils');

const sequelize = require('./Config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
// this sets up handlebars.js with custom helpers
const hdbars = exhdbars.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,  // look into this 
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }) 
};

app.use(session(sess));

// express for which template engine to use with handlebars
app.engine('handlebars', hdbars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(express.static(path.join(_dirname, 'public')));
// need to look at docs for express.static 
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening at port 3001'));
});
