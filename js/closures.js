// lexical scope

// closures

// var userName ='Lucky';  // global scope

// function local(){
// local scope
//     var userName ='Lucky';

//     console.log(userName);
// }

// local();

// function subscribe(){
//     var name = 'Lucky';

//     function displayName(){
// inner scope
// alert(name);
//         console.log(name);
//     }

//     displayName();
// }

// subscribe();

function makeFunc() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();

myFunc();
