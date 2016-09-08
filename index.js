'use strict';
const uniqueRandomArray = require('unique-random-array');
const petNames = require('./pet-names.json');

exports.all = petNames;
exports.random = uniqueRandomArray(petNames);
