
/* operators in javascript */

// var  yearVishal=2020-20;
// var yearMaahi=2020-1999;
// console.log(yearMaahi)
// console.log(yearVishal);

/*
var yrs, yrsM, yrsV, now;

// MAth operato
now = 2020;

ageVishal = 20;
ageMaa = 21;
yrsV = now - ageVishal;
yrsM = now - ageMaa;

console.log(yrsM);
console.log(yrsV)


console.log(now + 2);
console.log(now - 3);
console.log(now * 2);
console.log(now / 2);

// Logical Opertor

var maaOlder = ageMaa < ageVishal;
console.log(maaOlder);

//type of operator
console.log(typeof maaOlder);
console.log(typeof ageMaa);
console.log(typeof 'vishal ');
var x;
console.log(typeof x);

*/

/*  operator Precidence */
var now = 2018;
var yearVishal = 2000;
var fullAge = 20;

var isFullAge = now - yearVishal >= fullAge;
console.log(isFullAge);


var ageVishal = now - yearVishal;
var ageRohit = 33;

var averageAge = (ageRohit + ageVishal) / 2;
console.log(averageAge);

//multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y)

// more  operators
x = x * 2;
console.log(x);
x += 2;
console.log(x)
