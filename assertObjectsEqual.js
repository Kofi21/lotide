const eqObjects = function(object1, object2) {
  const firstObject = Object.keys(object1)
  const secondObject = Object.keys(object2)
  
  if (firstObject.length !== secondObject.length) {
    return false
  } else {
    for (let value of firstObject) {
      if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {
        if (!eqArrays(object1[value], object2[value])) {
          return false;
        }
      } else if (typeof object1[value] === "object" && typeof object2[value] === "object") {
        if (!eqObjects(object1[value], object2[value])) {
          return false
        }
      } else {
        if (object1[value] !== object2[value]) {
          return false
        }
      }
    }
    return true
  }
  }

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      
      `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      
      `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" }); // Should Pass
assertObjectsEqual({ a: "1", b: 2 }, { b: 3, a: "5" }); // Should Fail
assertObjectsEqual({ a: "1", b: 2 }, { b: 1, a: "2", c: "3" }); // Should Fail