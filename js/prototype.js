// prototype

// prototypal behaviour

// parent access child access jab tak mil nhi jata

// const newHero = ["hulk", "spiderman"];

// console.log(newHero);

// Array - object - null

// String - object - null

// function multipleBy5(num) {
//   return num * 5;
// }

// multipleBy5.power = 2;

// console.log(multipleBy5(6));

// console.log(multipleBy5.power);

// console.log(typeof multipleBy5.power);
// console.log(typeof multipleBy5);
// console.log(typeof multipleBy5(9));

// console.log(typeof multipleBy5.prototype);
// console.log(multipleBy5.prototype);

// function createUser(username, score) {
//   this.username = username;
//   this.score = score;
// }

// createUser.prototype.increment = function () {
//   this.score++;
// };

// createUser.prototype.printMe = function () {
//   console.log(`Score is ${this.score}`);
// };

// const user1 = new createUser("lucky", 44);

// console.log(user1);

// user1.increment();

// user1.increment();

// console.log(user1);

// user1.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// prototype

let myName = "Lucky       ";
let myChannel = "chai";

// console.log(myName.length);

// property method

// console.log(myName.truelength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidey power is : ${this.spiderman}`);
  },
};

// heroPower.prototype

Object.prototype.lucky = function () {
  console.log(`Lucky : ${this.thor} and ${this.spiderman}`);
};

heroPower.lucky();
