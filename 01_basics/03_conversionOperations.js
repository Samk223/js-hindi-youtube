let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // NaN - "33abc"

// "33" => 33
// "33aabc" => NaN
// true => 1; false => 0

let isLoggedIn = "rudra"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "rudra" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************** Operations ***************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);
// it provides the calculated value ^

let str1 = "somu"
let str2 = " sinu"

let str3 = str1 + str2
// console.log(str3); // somu sinu

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4 ) * 5 % 3);

// console.log(+true); // 1
// console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2+2 // tricky behaviour

let gameCounter = 100
gameCounter++;
// ++gameCounter; // both value 101
console.log(gameCounter);







