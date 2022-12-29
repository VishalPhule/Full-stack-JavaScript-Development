// introduction to object

const vishArray=[
  'Vishal',
  'Phule',
  2037 -2000,
  'Web Developer',
  ['Maahi','Vijay','Rohit']
];

// group of  object

const vishal ={
  firstName:'Vishal',
  lastName :'Phule',
  job:'Web Developer',
  friends:['Maahi','Vijay','Rohit']
}

console.log(vishal);

console.log(vishArray);

/*
dot vs Bracket Notation 

const vishal ={
  firstName:'Vishal',
  lastName :'Phule',
  job:'Web Developer',
  friends:['Sahil','Vijay','Rohit']
}

console.log(vishal)
console.log(vishal.lastName)
console.log(vishal.firstName);

console.log(vishal['job']);

const nameKey='Name';

console.log(vishal['first' + nameKey]);
console.log(vishal['last'+nameKey]);
// console.log(vishal. 'last' + nameKey)


const intrestedIn=prompt('What do you Want To Know About Vishal ? Choose between FirstName ,LastName,age,Job,and Friends');

//console.log(vishal[intrestedIn]);

if(vishal[intrestedIn]){
  console.log(vishal[intrestedIn]);
}else{
  console.log('Wrong Request......!   Choose between FirstName ,LastName,age,Job,and Friends');
}


vishal.location='india';
vishal['instagram']='vishal_7786';
console.log(vishal);


// challenge 
//"Vishal has 3 friend and his best friend Is called Rohit"

console.log(`${vishal.firstName} has  ${vishal.friends.length} friends , and his best friend is called ${vishal.friends[2]}`)

*/


/*
//Object Methods


const vishal ={
  firstName:'Vishal',
  lastName :'Phule', 
  birthYeah:1991,
  job:'Web Developer',
  friends:['Sahil','Vijay','Rohit'],
  hasDriverLicense:true,
  // calcAge:function(birthYeah){
  //   return 2037-birthYeah;
  // }

  // calcAge:function(){
  //   //console.log(vishal)
  //   return 2037-this.birthYeah;
  // }

  calcAge:function(){
    this.age=2037-this.birthYeah;
    return this.age ;
  },
  getSummery:function () {
    return `${this.firstName} is  a ${this.calcAge()} years old ${this.job} ,And Having  ${this.hasDriverLicense ? 'a': 'no'} driverse liscense`;
  }
};

console.log(vishal.calcAge());

console.log(vishal.age);
console.log(vishal.age);
console.log(vishal.age);


// console.log(vishal['calcAge'](1992));


/// challenge

// vishal is a 37 -years old web Developer ,and he has a drivers liscense;

console.log(vishal.getSummery());

*/
/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀

*/

/*

const vishal={
    fullName:'Vishal Phule',
    mass:78,
    height:1.69,
    calcBMI:function(){
      this.bmi=this.mass /this.height**2;
      return this.bmi;
    }
}
const rohit={
  fullName:'rohit mungase',
  mass:95,
  height:1.99,
  calcBMI:function(){
    this.bmi=this.mass /this.height**2
  }

}

vishal.calcBMI();
console.log(vishal.bmi);

rohit.calcBMI();
console.log(rohit.bmi);

if(vishal.bmi >rohit.bmi){
  console.log(`Vishal's BMI ${vishal.bmi} is higher than Rohit's ${rohit.bmi}!`)
}else{
  console.log(`Rohit's BMI ${rohit.bmi} is higher than Vishal's ${vishal.bmi}!`)
}


//test data 


const Maahi={
  fname:'Madhuri Phule',
  mass:50,
  height:1.74,

  calcBMIM:function(){
    this.bmi=this.mass/this.height**2;
  }
}

const Komal={
  fname:'Komal Wagandare',
  mass:60,
  height:1.70,

  calcBMIK:function(){
    this.bmi=this.mass/this.height**2;
  }

}

Maahi.calcBMIM();
Komal.calcBMIK();
console.log(Maahi.bmi ,Komal.bmi);

if(Maahi.bmi > Komal.bmi){
  console.log(  console.log(`Maahi's BMI ${Maahi.bmi} is higher than Komal's ${Komal.bmi}!`));
}else{
  console.log(`Komal's BMI ${Komal.bmi} is higher than Maahi's ${Maahi.bmi}!`)
}

*/

/*Loop 

console.log('Lifting with Repetation');


// for loop keeps Runing while Condtion is TRUE..
for(let rep =1; rep<=20; rep++){
 // console.log(`Lifting with Repetation ${rep}`);

}

const vishArray =[
 'vishal',
 'phule',
 2037-2000,
 'Teacher',
 ['vish','petar','stwen'],
 true
];
const type=[];

for(let i=0; i<vishArray.length;i++){
  console.log(vishArray[i],typeof[i]);


 // type[i]=typeof vishArray[i];

  type.push(typeof vishArray[i])
}
console.log(type);


const yrs =[1991,2007,2020];
const age =[];

for(let i=0;i<yrs.length;i++){
  age.push(2037-yrs[i]);
}
console.log(age)


// continue AND BReak


console.log('________ONLY STRINGS________');


for(let i=0; i<vishArray.length;i++){
  if(typeof vishArray[i]!=='string') continue;

  console.log(vishArray[i],typeof vishArray[i]);

}


console.log('________BREAK WITH NUMBERS________');


for(let i=0; i<vishArray.length;i++){
  if(typeof vishArray[i]!=='number') break;

  console.log(vishArray[i],typeof vishArray[i]);

}

*/
/*


console.log('Looping Backword and Lopps In Loops'); 
const vishArray =[
  'vishal',
  'phule',
  2037-2000,
  'Teacher',
  ['vish','petar','stwen'],
 ];

// 0,1,-.....4
// 4,3,......0

 for(let i=vishArray.length-1; i>= 0; i--){
   console.log(i,vishArray[i]);
 }

 for(let i=0; i<vishArray.length; i++){
   console.log(i,vishArray[i])
 }

 // loop inside loops
 for(let exercise =1;exercise<=4;exercise ++){
    console.log(`__Starting Exercise__ ${exercise}`);
    for(let rep=1;rep<6;rep++){
      console.log(`Lifting with Repetation ${rep}`)
    }

 }
*/

// While Loops 


// console.log(`While Loops In JS`);

// for(let rep=1;rep<=10;rep++){
//   console.log(`Lifting with Repetation ${rep}`)
// }

// let rep=1;
// while(rep<=10){
//   console.log(` While Lifting Loop Repetation ${rep}`);
//   rep++;
// }