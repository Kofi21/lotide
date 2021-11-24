const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (letters) {
  let newObject = {};
  let string = letters.split(" ").join("");
  
  for (let letter of string) {
    if (newObject[letter]) {
      newObject[letter]++;
    } else {
      newObject[letter] = 1;
    }
  }
  return newObject;
};

const test = countLetters("Lighthouse Labs");
assertEqual(test["L"], 2);
assertEqual(test["L"], 3);