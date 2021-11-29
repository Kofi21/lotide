const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = function (object, value) {
  console.log(Object.keys(object));
  for (item of Object.keys(object)) {
    if (object[item] === value) {
      return item;
    }
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
