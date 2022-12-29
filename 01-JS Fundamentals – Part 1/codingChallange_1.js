var vishalMass, rohitMass, Bmi, vishalHeight, rohitHeight, BmiV,BmiR;

vishalMass = 58;//kg
vishalHeight = 1.65; //meter

rohitMass = 60;//kg
rohitHeight = 1.78; //meter

// Bmi= mass / height^2 =mass/(height*height)

BmiV = vishalMass / (vishalHeight * vishalHeight);

BmiR = rohitMass / (rohitHeight * rohitHeight);

console.log(BmiV);
console.log(BmiR);


var VishalHiherBmi = BmiV > BmiR;
console.log('Is Vishal\'S BMI hiher than Rohit\'s ?'    +    VishalHiherBmi);
