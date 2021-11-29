# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @evander-owusu/lotide`

**Require it:**

`const _ = require('@evander-owusu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head()`: returns first element of an array
- `tail()`: returns everything except the first element of an array
- `middle()`: returns middle element(s) of an array
- `countLetters()`: returns on object with the number count of each letter in a string
- `countOnly()`: take in a collection of items and return counts for a specific subset of those items
- `eqArrays()`: takes in two arrays and returns true or false, based on a perfect match
- `eqObjects()`: takes in two objects and returns true or false, based on a perfect match
- `findKey()`: returns the corresponding key name of a desired value
- `findKeyByValue()`: scans the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined
- `letterPositions()`: returns an object of letters in a string with their corresponding index value
- `map()`: returns a new array based on the results of the callback function
- `takeUntil()`: keeps collecting items from a provided array until the callback provided returns a truthy value
- `without()`: return a subset of a given array, removing unwanted elements
