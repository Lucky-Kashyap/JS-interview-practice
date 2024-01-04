// what is an IIfE in JS

// Immediately Invoked Function Expression

// (function a() {
//   console.log("hi");
// })();

// a();

// practical  use case

// it will not polute the global scope

(function () {
  const h1 = document.querySelector("h1");

  const p = document.querySelector("p");

  const num = 120;

  h1.style.backgroundColor = "pink";

  h1.style.color = "black";

  p.innerText = num;
})();
