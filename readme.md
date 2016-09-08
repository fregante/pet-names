# pet-names [![Build Status](https://travis-ci.org/bfred-it/pet-names.svg?branch=master)](https://travis-ci.org/bfred-it/pet-names)

> Get popular pet names 

The name list is just a [JSON file](pet-names.json) and can be used wherever. Originally from cutepetname.com

> **pet name**
> _noun_
> a name that is used instead of someone's usual first name to express fondness or familiarity.

*Not accepting PRs for additional names.*

## Install

```
$ npm install --save pet-names
```


## Usage

```js
const petNames = require('pet-names');

petNames.random();
//=> 'Snuggle Bunny'
```


## API

### .all

Type: `array`

~400 pet names in alphabetical order.

### .random()

Type: `function`

Random pet name.


## CLI

```
$ npm install --global pet-names
```

```
$ pet-names --help

  Examples
    $ pet-names
    Pumpkin

    $ pet-names --all
    Adorable
    Alliebear
    ...

  Options
    --all   Get all names instead of a random name
```


## Related

- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words

## License

MIT © [Federico Brigante](twitter.com/bfred_it)
