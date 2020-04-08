#!/usr/bin/env node
'use strict';

var chalk = require('chalk');
var seedrandom = require("seedrandom");

function doy() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}

function shuffle(array) {
  var rng = seedrandom(String(doy()));
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(rng() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var items=process.argv.slice(2).sort();
shuffle(items);
console.log(`Random Sort for day ${chalk.green(doy())} of this year`)
items.forEach((item, i)=>{
  console.log(`${i+1}. ${chalk.blue(item)}`)
})
