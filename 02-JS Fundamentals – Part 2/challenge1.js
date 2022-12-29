/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀
The Complete JavaScript Course
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKols = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKols);


const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphin Wins The Trophy(${avgDolphins} vs. ${avgKoalas})`);

  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win  the Trophy (${avgKoalas} vs, ${avgDolphins})`);
  } else {
    console.log(`The match Draww😧`)
  }
}
checkWinner(scoreDolphins, scoreKols);

checkWinner(511, 111);

// ///test 2
// scoreDolphins=calcAverage(85,54,41);
// scoreKols =calcAverage(23,34,27);

// console.log(scoreDolphins ,scoreKols);
// checkWinner(scoreDolphins ,scoreKols);



const calcAverage1 = (d, e, f) => (d + e + f) / 3;
console.log(calcAverage1(2, 3, 4));

const scoreVish = (calcAverage1(10, 20, 30));
const scoreMahi = (calcAverage1(10, 30, 50));

console.log(scoreVish, scoreMahi);


const chkHigherScore = function (avgVish, avgMahi) {
  if (avgVish >= 2 * avgMahi) {
    console.log(`Vishal Is Winner (${avgVish} vs. ${avgMahi})`);
  } else if (avgMahi >= 2 * avgVish) {
    console.log(`Mahi is Winner (${avgMahi} vs.${avgVish})`);
  } else {
    console.log(`No one Win`);
  }

}
chkHigherScore(scoreVish, scoreMahi);
chkHigherScore(40,20);
//