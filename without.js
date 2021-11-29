const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertation Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴 Assertation Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function (source, itemsToRemove) {
  const cleanArray = [];
  for (const testNum of source) {
    if (!itemsToRemove.includes(testNum)) {
      cleanArray.push(testNum);
    }
  }
  return cleanArray;
};

module.exports = without;
