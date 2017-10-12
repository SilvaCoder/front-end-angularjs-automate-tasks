var express = require('express');
var solution = express();

const NAMES = new Array('Adam', 'Abe', 'Maria', 'Rose', 'Mario', 'Luigi');
const SURNAMES = new Array('Lincoln', 'Franklin', 'Jackson', 'Miyazaki', 'M\'bebe');
const DISCLOSABLEINFO = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

function Person(id, name, surname, disclosableInfo) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.disclosableInfo = disclosableInfo;

};

function getPeople() {

    var persons = new Array();

    for (var i = 0; i < 10; i++){

        persons.push(new Person(i, NAMES[Math.floor(Math.random() * NAMES.length)], NAMES[Math.floor(Math.random() * SURNAMES.length)], DISCLOSABLEINFO));

    };

    return persons;

};


solution.use(express.static('../webapp'));

solution.use(function (req, res, next) {

    console.log('New request for: ' + req.url);
    next();

});

solution.get('/rest/people', function (req, res) {
    
    res.json(getPeople());

});

solution.listen(8090, function () {

    console.log('listening on port 8090...');

});


