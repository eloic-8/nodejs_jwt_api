const User = require('../models').user;
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.indexApi = (req, res) => {
    res.json({
        message: "Welcome to the API"
    })
};

exports.doLoginApi = (req, res) => {
    const { email, password } = req.body;
    // res.json({
    //     message: "Login"
    // })
    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if(!user) {
            res.json({
                message: "User Not found"
            });
        } else {
            jwt.sign({ user }, config.jwt.secret, { expiresIn: '60s' }, function(err, token) {
                res.json({
                    message: "User found",
                    token
                });
              });
            
        }
    });
}