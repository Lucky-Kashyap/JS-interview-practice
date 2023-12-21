// 1 call apply bind

let name = {
  firstname: "Lucky",
  lastname: "Kashyap",
  // printFullName: function () {
  //   console.log(this.firstname + " " + this.lastname);
  // },
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " from " +
      hometown +
      " state " +
      state
  );
};

let name2 = {
  firstname: "Ajay",
  lastname: "Kumar",
  // printFullName: function () {
  //   console.log(this.firstname + " " + this.lastname);
  // },
};

// console.log(name);

// name.printFullName();

// invoked function directly

// function borrowing
// printFullName.call(name);
// printFullName.call(name2);

// for more arguments

// apply would come into picture

// printFullName.apply(name, ["Delhi", "Delhi NCR"]);
// printFullName.apply(name2, ["Agra", "UP"]);

// bind method

// it gives you the copy of that method which can be invoked later

// return function and invoked later

// let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");

// printMyName();
