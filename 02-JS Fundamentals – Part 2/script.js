/*
 
// Function Deceleration

function calcAge1(birthYeah) {
return 2037-birthYeah;
}
const age1=calcAge1(1991);
//console.log(age1);
//console.log(calcAge1(1991));

// Function Expressions
const calcAge2= function (birthYeah) {
  return 2037-birthYeah;
}
const age2=calcAge2(1991);
console.log(age1,age2)

*/

// Arrow Function In JavaScript
/*
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} returns in ${retirement} Years`
}
console.log(yearsUntilRetirement(1991, 'jonas'));

console.log(yearsUntilRetirement(2012, 'BOB'));



const ageMaahi = hbDay => 2021 - hbDay;
const ageM = ageMaahi(2000);
console.log(ageM);

const ageVish = hbDay => 2021 - hbDay;
const ageV = ageVish(2000);
console.log(ageV);


const marriageYear = (birthYeah, firstM) => {
  const ageM = 2021 - birthYeah;
  const retirementM = 60 - ageM;
  return `${firstM} retires in ${retirementM} Years`
}
console.log(marriageYear(2000, 'MaAhi'));

const yearsOld = (birthYear, fName) => {
  const ageVish = 2021 - birthYear;
  const afterOne = ageVish + 1;
  return `The Age Of ${fName} after one Year  IS ${afterOne}  Years`;
}

console.log(yearsOld(2000, 'VishaL'));


console.log('Calling One Function From Another');


function cutFruitPiece(fruit) {
  return fruit * 4;

}pp

const fruitProcessor = function (apples, oranges) {

  const applePiece = cutFruitPiece(apples);
  const orangePiece = cutFruitPiece(oranges);

  const juice = `juice with ${applePiece} apples and  ${orangePiece} oranges`;
  return juice;

}
console.log(fruitProcessor(2, 3));
// const appleJuice = fruitProcessor(3, 0);
// console.log(appleJuice);

const makhanPack = function(bag){
  return bag * 2;
}

const makhanProcessor = function (milk, curd) {
  const milkPack = makhanPack(milk);
  const curdPack = makhanPack(curd);

  const makhan = ` Makhan Is created  with ${milkPack} milk and ${curdPack} curd`
  return makhan;
}

console.log (makhanProcessor(2,4));



*/

console.log('Reviewing Functions');

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {

  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} Years`);
    return retirement;
  } else {
    console.log(`${firstName} Has Already Retired..............!`)
    return -1;

  }

  // return 
}
console.log(yearsUntilRetirement(1991, 'Vishal'));
console.log(yearsUntilRetirement(1950, 'Vishu'));



function mVish(name, yrs) {
  const age = 2021 - yrs;
  console.log(`the ${name} is ${age} Years Old...!`);
  return age;
}

const age = mVish('Vishal', 2000);

const vMahi = function (name1, yrs1) {
  const age1 = 2021 - yrs1;
  console.log(`The ${name1} is ${age1} Years Oold`);
  return age1;
}
const age1 = vMahi('MaAhiJi', 2000)



const vMahii = (name1, yrs1) => {
  const ages1 = 2021 - yrs1;
  console.log(`The ${name1} is ${ages1} Years Oold`);
}
const ages1 = vMahii('MaAhiJi', 2000)

