var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* Example 2 - Create User */
router.get('/create', function(req, res){
    res.render('simpleform.ejs', {action: '/user/create'});
});

router.post('/create', function (req, res) {
    connection.query('INSERT INTO User SET ?', req.body,
        function (err, result) {
            if (err) throw err;

            if(result.UserID != 'undefined') {
                var placeHolderValues = {
                    email: req.body.email,
                    password: req.body.password
                };
                res.render('displayUserInfo.ejs', placeHolderValues);
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});

/* Example 3 - View all users */
router.get('/all', function (req, res) {
    db.GetAll(function (err, result) {
	if (err) throw err;
            res.render('displayUserTable.ejs', {rs: result});
        }
    );
});

module.exports = router;
