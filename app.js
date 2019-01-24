const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const db = require('./models');

// Initialize app variable.
const app = express();

// Configuration of BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Define routes
require('./routes/routes')(app);

// force: true will drop all table if already exist
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
    initial();
})

var User = db.user;
function initial() {
    User.create({
        username: "eloic8",
        email: "eloictom@gmail.com",
        password: "$2a$10$O70cRrp09zzejZEhCH7hQe8ZRYL7qo9S7selEB.iVdMInH4kAbxxC"
    });

    User.create({
        username: "squall",
        email: "squall974@gmail.com",
        password: "$2a$10$O70cRrp09zzejZEhCH7hQe8ZRYL7qo9S7selEB.iVdMInH4kAbxxC"
    });
}

app.listen(config.port, () => {
    console.log('Server is running on port ' + config.port);
});