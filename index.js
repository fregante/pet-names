'use strict';
var uniqueRandomArray = require('unique-random-array');
var petNames = require('./pet-names.json');

exports.all = petNames;
exports.random = uniqueRandomArray(petNames);
