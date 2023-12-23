// debouncing
// search bar
// scrolling
// window resizez

// unwanted function

// application performance

// function baar baar call na ho

let input = document.getElementById("search");

let count = 0;

function getData() {
  count++;
  console.log("fetching data", count);
}

function myDebounce(call, id) {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      call();
    }, id);
  };
}
const betterFunction = myDebounce(getData, 1000);
