const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed");
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false 
  } 
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1"}

// console.log(eqObjects(ab, ba))
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);