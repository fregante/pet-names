#!/usr/bin/env node
'use strict';
var meow = require('meow');
var petNames = require('./');

var cli = meow([
	'Examples',
	'  $ pet-names',
	'  Pumpkin',
	'',
	'  $ pet-names --all',
	'  Adorable',
	'  Alliebear',
	'  ...',
	'',
	'Options',
	'  --all   Get all names instead of a random name'
]);

console.log(cli.flags.all ? petNames.all.join('\n') : petNames.random());
