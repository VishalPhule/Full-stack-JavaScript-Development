/*
console.log(`INTRODUCTION TO ARRY`);

const friend1 = 'Rohit';
const friend2 = 'Sushant';
const friend3 = 'Sahil';

const friends = ['Rohit', 'Sushant', 'Sahil'];
console.log(friends);

const yrs = new Array(1991, 1994, 1993, 1998);

console.log(friends[1]);
console.log(friends[0])

console.log(friends.length)
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends);

const vishal = ['vishal', 'Phule', 2021 - 2000, 'Developer', friends];

console.log(vishal);
console.log(vishal.length);

// Exercise

const calcAge = function (birthyeah) {

  return 2037 - birthyeah;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const  ages =[calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length - 1])];
const ages1 = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages ,ages1);
*/

console.log('Operations On Array');

const friends = ['Rohit', 'Sushant', 'Sahil'];

//push operation

const newLength =friends.push('Vijay');

console.log(friends);
console.log(newLength);

friends.unshift('Avinash'); //unshift method is used for adding new  element in array  at begening
console.log(friends);

friends.push('Sushant');
console.log(friends);

// pop ise used for removing last  element from Array 

friends.pop(); //pop last elemnt from the array


const popped= friends.pop(); //pop last elemnt from the array
console.log(popped);
console.log(friends);

// remove first elemnt feom the Array
friends.shift();
console.log(friends);

// for the chk the posion of the element in the Array
console.log(friends.indexOf('Sushant'));

console.log(friends.indexOf('Vijay'));

 friends.push(23);
console.log(friends.includes('Sahil'));
console.log(friends.includes('Vishal'));

console.log(friends.includes(23));


if(friends.includes('Rohit')){
  console.log('You have Frnd Called  Sushant');
}