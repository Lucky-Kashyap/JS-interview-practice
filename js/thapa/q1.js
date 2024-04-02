// Question 1

// Write a function to find longest word that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

// Constraints

// The input string may contain alphabetic characters, digits, spaces, and punctuation.

// The input string is non-empty.

// The input string may contain multiple words seperated by spaces

// Note

// If the input strng is empty or contains only whitespace, the function should return an false.

// The function should ignore leading and trailing whitespace when determining the longest word.

function findLongestWord(str) {
  if (str.trim().length === 0) {
    return false;
  }

  let strArr = str.split(" ");

  // console.log(strArr);

  // strArr = strArr.sort((a, b) => a.length - b.length);

  // return strArr.at(-1);

  return strArr.reduce(
    (acc, curr) => (curr.length > acc.length ? curr : acc),
    ""
  );
}

// sort method sort values in unicode value . first letter in a ascending order

// a>b 1 b>a -1

console.log(
  findLongestWord("Watch Thapa Technical javascript course on youtube")
);
