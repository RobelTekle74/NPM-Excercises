
var reorder = require('lodash/_reorder.js');


var cars = ['mustang', 'challenger', 'camaro', 'corvette', 'gt', 'viper'];
var indexes = [0, 4, 5, 1, 3, 2];


console.log(reorder(cars, indexes));